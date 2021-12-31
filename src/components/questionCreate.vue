<template>
  <form class="input_group" @submit.prevent>
    <input v-if="step === 1" type="text" placeholder="Quiz Title" v-model="questionTitle" required>
    <p v-else>Question {{step}}</p>
    <input type="text" placeholder="Question Title" v-model="question.question" required>
    <hr />
    <div class="d-flex flex-column flex-md-row align-content-between justify-content-evenly">
      <input type="text" placeholder="Answer 1" class="mx-2" v-model="question.answers[0].text" required>
      <input type="text" placeholder="Answer 2" class="mx-2" v-model="question.answers[1].text" required>
      <input type="text" placeholder="Answer 3" class="mx-2" v-model="question.answers[2].text">
      <input type="text" placeholder="Answer 4" class="mx-2" v-model="question.answers[3].text">
    </div>
    <div>
      <label v-for="(answer, i) in question.answers" :key="i">
        <input v-if="answer.text.length > 0" type="radio" name="correct-answer" v-model="selected" :value="i" class="p-0 m-0 mx-4 radio" required>
        <span v-if="answer.text.length > 0">Answer {{i+1}}</span>
      </label>
    </div>
    <div class="d-flex flex-column-reverse pt-5 pb-5 flex-md-row align-content-between justify-content-evenly">
      <button class="button" role="button" @click="submit">Submit Quiz</button>
      <button class="button mb-5 mb-md-0" @click="nextQuiz" role="button" v-if="step < 10">Next Question</button>
    </div>
  </form>
</template>

<script>
import {computed, reactive, ref} from "vue";
export default {
  name: "questionCreate",
  emits: ["setTitle", "appendQuestion", "increaseStep", "submitQuiz"],
  props: {
    step: Number
  },
  setup(props, { emit }) {

    // ref, computed and reactive
    const selected = ref(0)
    const question = reactive({
      question: '',
      answers: [
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
      ]
    })
    const questionTitle = ref('')
    const formValid = computed(() => (
        questionTitle.value.length > 0 || props.step > 1)
        && question.question.length > 0
        && question.answers.filter(answer => answer.text.length > 0).length >= 2
        && question.answers[selected.value].text.length > 0
    )

    function updateQuiz() {
      if (props.step === 1) {
        emit('setTitle', questionTitle.value)
      }
      emit('appendQuestion', question)
    }

    function nextQuiz() {
      if (formValid.value) {
        question.answers[selected.value].correct = true
        question.answers = question.answers.filter(answer => answer.text.length > 0)
        updateQuiz()
        emit('increaseStep')
      }
    }

    function submit() {
      if (formValid.value) {
        question.answers[selected.value].correct = true
        question.answers = question.answers.filter(answer => answer.text.length > 0)
        updateQuiz()
        emit('submitQuiz')
      }
    }
    return {questionTitle, question, selected, nextQuiz, submit}
  }
}
</script>

<style scoped>


.input_group {
  width: 80%;
  margin: 4em auto;
}

label,
input {
  font-size: 1.5em;
}

p {
  font-family: "Press Start 2P", cursive;
  font-size: 1.5em;
}

span {
  font-family: "Press Start 2P", cursive;
  cursor: pointer;
}

.radio{
  clip-path: inset(50%);

}

.radio:checked + span::before {
  animation: blinker 1s infinite;
  box-shadow: 2px 2px 0 .020em,4px 2px 0 .020em,2px 4px 0 .020em,4px 4px 0 .020em,6px 4px 0 .020em,8px 4px 0 .020em,2px 6px 0 .020em,4px 6px 0 .020em,6px 6px 0 .020em,8px 6px 0 .020em,10px 6px 0 .020em,2px 8px 0 .020em,4px 8px 0 .020em,6px 8px 0 .020em,8px 8px 0 .020em,10px 8px 0 .020em,12px 8px 0 .020em,2px 10px 0 .020em,4px 10px 0 .020em,6px 10px 0 .020em,8px 10px 0 .020em,10px 10px 0 .020em,2px 12px 0 .020em,4px 12px 0 .020em,6px 12px 0 .020em,8px 12px 0 .020em,2px 14px 0 .020em,4px 14px 0 .020em;
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: -25px;
  content: "";
  color: #E1F1FF;
}

.radio + span {
  position: relative;
  color: #E1F1FF;
}

hr {
  background: #E1F1FF;
  color: #E1F1FF;
  border: 5px dashed hsl(217, 54%, 11%);
  opacity: 1;
}

input {
  width: 100%;
  margin: 0.5em 0 1.5em;
  padding: 1em 0.25em;
  background: #E1F1FF;
  border: none;
  border-bottom: 6px solid darkcyan ;
  font-family: "Press Start 2P", cursive;
  border-radius: 5px;
  transition: all 0.6s ease;
}
input:focus {
  outline: none;
  background: #bee1ff;
  border-bottom: 3px solid darkslategray;
}

@keyframes blinker {
  from { opacity: 1.0; }
  50% { opacity: 0.0; }
  to { opacity: 1.0; }
}
</style>