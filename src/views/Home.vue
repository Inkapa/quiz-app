<template>
  <div class="d-flex flex-column flex-grow-1 align-content-between justify-content-evenly">
    <router-link
        to="/create"
        v-slot="{href, navigate}"
    >
      <button class="button home" role="button" :href="href" @click="navigate" >Create a Quiz</button>
    </router-link>
    <router-link
        to="/play"
        v-slot="{href, navigate}"
    >
      <button class="button home" :href="href" @click="navigate">Play a Quiz</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
</style>