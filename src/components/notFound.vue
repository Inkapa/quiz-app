<template>
  <div class="d-flex flex-column flex-grow-1 align-content-between justify-content-evenly">
    <h1>Not Found</h1>
    <h3>The requested page does not exist</h3>
    <router-link
        to="/"
        v-slot="{href, navigate}"
    >
      <button class="button home" :href="href" @click="navigate" role="button">Go back</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
h1, h3 {
  font-family: "Press Start 2P", cursive;
}
</style>