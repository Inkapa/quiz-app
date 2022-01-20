<template>
  <questionCreate
      v-if="step > 0"
      :step='step'
      :key="step"
      @appendQuestion="appendQuestion"
      @setTitle="setTitle"
      @increaseStep="increaseStep"
      @submitQuiz="submitQuiz">
  </questionCreate>

  <div v-if="step === 0 && !error" class="d-flex flex-column flex-grow-1 align-content-between justify-content-evenly">
    <p>Share the link below to let others play your quiz</p>
    <p v-if="loading" id="loader"></p>
    <p v-if="!loading">&gt; <router-link :to="{ name: 'Game', params: { id: quiz_id }}">{{ url }}</router-link> &lt;</p>
  </div>

  <error v-if="error"></error>

</template>

<script>
import questionCreate from "../components/questionCreate.vue"
import {reactive, ref} from "vue";
import { useRouter } from "vue-router";
import error from "../components/error";
import {fetchWithTimeout} from "../utils/fetchWithTimeout";

export default {
  name: "createQuiz",
  components: {
    questionCreate,
    error
  },
  setup(){
    // ref and reactive
    let url = ref(window.location.origin + '/play/')
    let quiz_id = ref('')
    const step = ref(1)
    const quizData = reactive({
      title: '',
      questions: []
    })
    const loading = ref(true)
    const error = ref(false)
    const router = useRouter()

    // Send data to API
    const sendToApi = async () => {
      try {
        const response = await fetchWithTimeout(
            process.env.VUE_APP_API_URL
            + process.env.VUE_APP_CREATE_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              timeout: 15000,
              body: JSON.stringify(quizData)
            });
        const resp = await response.json()
        // fetch the created quiz id
        quiz_id.value = resp.key
        url.value = url.value + quiz_id.value
        loading.value = false
      } catch(e) {
        error.value = true
        loading.value = false
      }
    }

    function setTitle(title){
      quizData.title = title
    }

    function appendQuestion(object){
      quizData.questions.push(object)
    }

    function increaseStep(){
      ++step.value;
    }

    function submitQuiz(){
      step.value = 0
      sendToApi()
      setTimeout(() => {
        if (router.currentRoute.value.name === "Create"){
          router.push("/")
        }
      }, 20000)
    }
    return {step, quizData, url, quiz_id, loading, error, setTitle, appendQuestion, increaseStep, submitQuiz}
  }
}
</script>

<style scoped>
img {
  margin: 10vh;
  height: 30vh;
}
p, a{
  font-family: "Press Start 2P", cursive;
  font-size: 1.5em;
  word-wrap: break-word

}
a {
  color: #00A688;
  font-size: 1em;
}
</style>
