<template>
  <div class="d-flex flex-column h-100">
    <router-link
        to="/"
        v-slot="{navigate}"
    >
      <div class="logo mt-5" @click="navigate">Quiz App</div>
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  background-color: hsl(217, 54%, 11%);
}

div {
  font-family: "Press Start 2P", cursive;
}

a {
  text-decoration: none;
}

p, a{
  font-size: 1.5em;
  word-wrap: break-word
}

#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightcyan;
}

.home {
  width: 50vw;
  max-width: 1000px;
  height: 150px;
}

.button {
  background: rgba(16, 16, 16);
  border: 2px solid #00a688;
  color: #E1F1FF;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  justify-content: center;
  line-height: 24px;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px #00a688,
  2px 2px 0px 0px #00a688,
  3px 3px 0px 0px #00a688,
  4px 4px 0px 0px #00a688,
  5px 5px 0px 0px #00a688,
  6px 6px 0px 0px #00a688,
  7px 7px 0px 0px #00a688,
  8px 8px 0px 0px #00a688,
  9px 9px 0px 0px #00a688,
  10px 10px 0px 0px #00a688;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: auto;
}

.button:hover {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

.logo {
  color: #E1F1FF;
  font-size: 70px;
  font-family: "Press Start 2P", cursive;
  font-style: italic;
  cursor: pointer;
  font-weight: 500;
  text-shadow: #00A688 1px 1px 0px, #00A688 2px 2px 0px, #00A688 3px 3px 0px, #00A688 4px 4px 0px, #00A688 5px 5px 0px, #00A688 6px 6px 0px, #00A688 7px 7px 0px, #00A688 8px 8px 0px, #00A688 9px 9px 0px, #00A688 10px 10px 0px;
  line-height: 1.1;
}

.logo:hover {
  text-shadow: #00A688 1px 1px 0px, #00A688 2px 2px 0px, #00A688 3px 3px 0px, #00A688 4px 4px 0px, #00A688 5px 5px 0px, #00A688 6px 6px 0px, #00A688 7px 7px 0px;
}

@media (min-width: 544px) {
  .logo {
    font-size: 100px;
  }
}

#loader {
  animation: spin 1s linear infinite;
  height: 10px;
  width: 10px;
  position: sticky;
  left: 50%;
}

@keyframes spin {
  0% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  6.25% {
    box-shadow:
        0px -30px transparent,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  12.5% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  18.75% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  25% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  31.25% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  37.5% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px transparent,
        -10px -30px transparent;
  }
  43.75% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px #00A688,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px transparent;
  }
  50% {
    box-shadow:
        0px -30px transparent,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px #00A688,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  56.25% {
    box-shadow:
        0px -30px #00A688,
        10px -30px transparent,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px #00A688,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  62.5% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px transparent,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px #00A688,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  68.75% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px transparent,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px #00A688,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  75% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px transparent,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px #00A688,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  81.25% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px transparent,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px #00A688,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  87.5% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px transparent,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px #00A688,
        -10px -30px #00A688;
  }
  93.75% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px transparent,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px #00A688;
  }
  100% {
    box-shadow:
        0px -30px #00A688,
        10px -30px #00A688,
        20px -20px #00A688,
        30px -10px #00A688,
        30px 0px #00A688,
        30px 10px #00A688,
        20px 20px #00A688,
        10px 30px #00A688,
        0px 30px transparent,
        -10px 30px transparent,
        -20px 20px transparent,
        -30px 10px transparent,
        -30px 0px transparent,
        -30px -10px transparent,
        -20px -20px transparent,
        -10px -30px transparent;
  }
}
</style>
