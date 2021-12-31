<template>
  <div class="d-flex flex-column flex-grow-1 align-content-between justify-content-evenly">
    <h1>Something went wrong</h1>
    <h3>A server request failed and the action could not be completed</h3>
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
  name: "Error"
}
</script>

<style scoped>

</style>