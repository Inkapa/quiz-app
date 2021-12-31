# <center> Simple Quiz App </center>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/Vue-3.0.0-success" alt="vue">
  </a>
  <a href="https://github.com/Inkapable/spotify-viewer/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

English | [Français](./README.fr-FR.md)

---

## Introduction

This is a simple quiz app built in Vue 3 using the composition API.

This project was originally built for a Dev Jam, and helped me familiarize myself with the
Vue.js framework and vue-router.

The project is broken into two parts, the frontend and the API (available [here](https://github.com/Inkapa/quiz-api))

## How does it work?

The quiz app allows you to do the following:

- ✅ - Create a new Quiz with up to 10 questions (arbitrary limit that can be extended)
- ✅ - Once created, get a shareable link to allow others to play your quiz
- ✅ - Play a random [Open Trivia DB](https://opentdb.com/api_config.php) quiz
- ✅ - Play a random quiz created by other users on the site
- ✅ - Display correct and incorrect answers
- ✅ - Get the quiz score and elapsed time once a quiz is finished

# Preview

[Live demo](https://quiz.liam.social)

![Preview image #1](https://i.imgur.com/BiqooYT.png)
![Preview image #2](https://i.imgur.com/0pjbADY.png)
![Preview image #3](https://i.imgur.com/NJYINwH.png)


## Browser support

Most modern browsers are supported (excluding Internet Explorer).

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edge                                                                                                                                                                                               | Firefox                                                                                                                                                                                                | Chrome                                                                                                                                                                                              | Safari                                                                                                                                                                                              | Opera                                                                                                                                                                                            |


## Project setup
To make the project as intended, both API and Frontend are required.

For more information of how to setup the API please refer yourself 
to the API's [README page](https://github.com/Inkapa/quiz-api#Project_setup)

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Credits

The project was built with [Bootstrap 5.0](https://github.com/twbs/bootstrap), [Vue Router 4](https://github.com/vuejs/vue-router-next) and [OpenTDB](https://opentdb.com/api_config.php)

## License

[MIT](https://github.com/Inkapa/quiz-app/blob/master/LICENSE)
