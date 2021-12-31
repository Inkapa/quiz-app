<template>
  <div v-if="loading" class="d-flex flex-column flex-grow-1 align-content-between justify-content-evenly">
    <p>Loading quiz</p>
    <p id="loader"></p>
  </div>
  <notFound v-if="!found && !loading"></notFound>
  <error v-if="error"></error>
  <quizAnswer
      v-if="found && !error && !loading"
      :data="quizData"
      :opt="optMode"
  >
  </quizAnswer>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import notFound from '../components/notFound.vue';
import error from "../components/error";
import {fetchWithTimeout} from "../utils/fetchWithTimeout";
import {shuffle} from "../utils/shuffle";
import quizAnswer from "../components/quizAnswer";

export default {
  name: "Game",
  components: {
    notFound,
    error,
    quizAnswer
  },
  props: ['id'],
  setup(props){

    // refs and computed
    const quizData = ref({})
    const loading = ref(true)
    const found = ref(false)
    const error = ref(false)
    const optMode = computed(() => props.id === 'open-trivia')


    onMounted( async () => {
      // Check if id is valid
      if (props.id.match('^[0-9a-f]{8}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{12}$|^random$|^open-trivia$')){
        found.value = true

        // Send request to Open Trivia DB
        if (props.id === 'open-trivia'){
          try {
            const nbQuestions = Math.floor( Math.random() * ( 7 ) ) + 4
            const response = await fetchWithTimeout(
                `https://opentdb.com/api.php?amount=${nbQuestions}`,
                {
                  timeout: 5000
                });
            const data = await response.json()
            quizData.value.title = 'Random Open Trivia'
            quizData.value.questions = []

            // Cast Open Trivia response to template
            Object.values(data.results).forEach(result => {
              let question = {}
              question.answers = []
              question.question = result.question
              result.incorrect_answers.forEach(answer => {
                question.answers.push({text:answer, correct: false})
              })
              question.answers.push({text:result.correct_answer, correct: true})
              shuffle(question.answers)
              quizData.value.questions.push(question)
            })
          } catch (e) {
            error.value = true
            loading.value = false
          }
        } // Send request to self API
        else {
          try {
            const response = await fetchWithTimeout(
                process.env.VUE_APP_API_URL
                + process.env.VUE_APP_GET_ID_ENDPOINT
                + props.id,
                {
                  timeout: 5000
                });
            if (!response.ok) {
              loading.value = false
              if (response.status === 404) {
                found.value = false
              } else {
                error.value = true
              }
              return
            }
            const movies = await response.json();
            // Shuffle response for randomness
            shuffle(movies.questions)
            Object.values(movies.questions).forEach(question => {
              shuffle(question.answers)
            })
            quizData.value = {...quizData.value, ...movies}
          } catch (e) {
            error.value = true
            loading.value = false
          }
        }
      }
      loading.value = false
    })

    return {quizData, loading, found, error, optMode}
  }
}
</script>

<style scoped>

</style>