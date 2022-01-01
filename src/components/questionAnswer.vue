<template>
  <div class="d-flex flex-column flex-grow-1 pb-3">
    <p v-html="question.question" class="pb-3"></p>
    <button
        v-for="(answer, i) in question.answers"
        :key="i"
        :ref="el => { if (el) buttons[i] = el }"
        @click="checkResponse(answer)"
        :value = "i"
        class="button question"
        role="button"
        v-html="answer.text"
        :disabled="!active"
    ></button>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  name: "questionAnswer",
  props: ['question', 'step', 'opt'],
  emits: ['increaseStep', 'increaseScore'],
  setup(props, { emit }){

    const buttons = ref([])
    const active = ref(true)

    function checkResponse(response)
    {
      if (active.value) {
        active.value = false
        if (response.correct) {
          emit('increaseScore')
        }
        // Set button background styles
        props.question.answers.forEach(
            (answer, i) => answer.correct ?
                buttons.value[i].classList.add("valid")
                : buttons.value[i].classList.add("invalid")
        )
        setTimeout(() => emit('increaseStep'), 2500)
        // else {
          //
          // Deprecated solution with a verification endpoint to avoid cheating
          // I realised it wasn't worth the hassle, it added too much
          // latency and people can still cheat with it anyway, so I might
          // as well do like Open Trivia and send the correct answer directly
          //
          // const verify = async () => {
          //   const data = {
          //     question_key: props.question.key,
          //     answer_key: response.key
          //   }
          //
          //   const request = await fetchWithTimeout(
          //       process.env.VUE_APP_API_URL
          //       + process.env.VUE_APP_VERIFY_ENDPOINT,
          //       {
          //         method: 'POST',
          //         headers: {
          //           'Content-Type': 'application/json'
          //         },
          //         timeout: 5000,
          //         body: JSON.stringify(data)
          //       })
          //   const resp = await request.json()
          //   if (resp.correct){
          //     buttons.value[index].classList.add("valid")
          //     buttons.value.forEach((button, i) => i !== index ? button.classList.add("invalid") : '')
          //     emit('increaseScore')
          //   } else {
          //     props.question.answers.forEach(
          //         (answer, i) => {
          //           if (resp.answers.includes(answer.key)){
          //             buttons.value[i].classList.add("valid")
          //           } else {
          //             buttons.value[i].classList.add("invalid")
          //           }
          //         }
          //     )
          //   }
          // }
          // verify()
      }
    }

    // Reset background on new questions
    watch(() => props.step, () => {
      active.value = true
      buttons.value.forEach(button => button.classList.remove('valid', 'invalid'))
    })
    return { checkResponse, buttons, active }
  }
}
</script>

<style scoped>
.question {
  width: 50vw;
  max-width: 1000px;
  height: 80px;
}

p {
  margin: auto !important;
}

.valid {
  background-color: #2e7332 !important;
}

.invalid {
  background-color: #5e0000 !important;
}

</style>