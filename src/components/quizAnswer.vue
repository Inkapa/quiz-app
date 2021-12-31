<template>
  <div class="d-flex flex-column flex-grow-1 justify-content-center pt-3">
    <p v-if="!finished" class="coloured small">Question {{ step+1 }}/{{ totalSteps }}</p>
    <questionAnswer
        v-if="!finished"
        :question="data.questions[step]"
        :step="step"
        :opt="opt"
        @increaseStep="increaseStep"
        @increaseScore="increaseScore"
    ></questionAnswer>
    <div v-else>
      <p class="pb-5">The quiz is now finished!</p>
      <p class="pb-5">Score: <span class="coloured">{{ score }}/{{ totalSteps }}</span></p>
      <p class="pb-5">Time Elapsed: <span class="coloured">{{ timer }}s</span></p>
      <router-link
          to="/"
          v-slot="{href, navigate}"
      >
        <button class="button home" :href="href" @click="navigate" role="button">Go back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref, unref, watch} from "vue";
import questionAnswer from "./questionAnswer";

export default {
  name: "quizAnswer",
  props: ['data', 'opt'],
  components: {
    questionAnswer,
  },
  setup(props){
    // ref and reactive
    const step = ref(0)
    const totalSteps = unref(props.data.questions).length
    const score = ref(0)
    const finished = computed(() => step.value >= props.data.questions.length)
    const timer = ref(Math.round(Date.now() / 1000))
    onMounted(() => document.title = props.data.title)

    function increaseScore()
    {
      ++score.value
    }

    function increaseStep()
    {
      ++step.value
    }

    // Reset title and stop timer when quiz is finished
    watch(() => finished.value, () => {
      document.title = "Quiz App"
      timer.value = Math.round(Date.now() / 1000) - timer.value
    })

    return {step, totalSteps, score, finished, timer, increaseScore, increaseStep}
  }
}
</script>

<style scoped>
p {
  margin: auto !important;
}

.coloured {
  color: #00A688;
}

.small {
  font-size: 1em;
}
</style>