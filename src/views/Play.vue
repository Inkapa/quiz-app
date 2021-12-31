<template>
  <div class="d-flex flex-column flex-grow-1 align-content-between justify-content-evenly">
    <router-link
        :to="{ name: 'Game', params: { id: 'open-trivia' }}"
        v-slot="{href, navigate}"
    >
      <button class="button home" :href="href" @click="navigate" role="button">Random OpenTrivia Quiz</button>
    </router-link>
    <router-link
        :to="{ name: 'Game', params: { id: 'random' }}"
        v-slot="{href, navigate}"
    >
      <button class="button home" :href="href" @click="navigate" role="button">Random Community Quiz</button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "playQuiz",
}
</script>

<style scoped>

</style>