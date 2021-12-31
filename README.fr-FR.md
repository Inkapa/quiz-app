# <center> Simple Quiz App </center>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/Vue-3.0.0-success" alt="vue">
  </a>
  <a href="https://github.com/Inkapable/spotify-viewer/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

Français | [English](./README.md)

---

## Introduction

Ce project est une simple application de quiz développée en Vue 3 utilisant l'API de composition.

Ce projet a été construit pour une Dev Jam, et m'a servie de point d'appui pour mieux me familiariser
avec le framework Vue.js et vue-router

Ce projet est séparé en deux parties, le frontend et l'API (disponible [ici](https://github.com/Inkapa/quiz-api))

## Comment ça marche?

Cette application de quiz permet de:

- ✅ - Créer un nouveau quiz contenant jusqu'à 10 questions (limite arbitraire pouvant être étendue)
- ✅ - Générer un lien de partage une fois un quiz créé
- ✅ - Jouer à un quiz au hasard depuis [Open Trivia DB](https://opentdb.com/api_config.php)
- ✅ - Jouer à un quiz au hasard créer via l'application
- ✅ - Afficher les réponses correctes et incorrectes
- ✅ - Récupérer le score et le temps écoulé à la fin d'un quiz

# Démonstration

[Live demo](https://quiz.liam.social)

![Preview image #1](https://i.imgur.com/BiqooYT.png)
![Preview image #2](https://i.imgur.com/0pjbADY.png)
![Preview image #3](https://i.imgur.com/NJYINwH.png)

## Browser support

Most modern browsers are supported (excluding Internet Explorer).

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/) |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edge                                                                                                                                                                                               | Firefox                                                                                                                                                                                                | Chrome                                                                                                                                                                                              | Safari                                                                                                                                                                                              | Opera                                                                                                                                                                                            |


## Mise en place local

Pour plus d'informations sur comment mettre en place l'API, veuillez vous referer
à son [README](https://github.com/Inkapa/quiz-api/blob/master/README.fr-FR.md#mise-en-place)

```
npm install
```

#### Compile et hot-reloads pour phase de development
```
npm run serve
```

#### Compile et minifie pour phase de production
```
npm run build
```

#### Lints et correction des fichiers
```
npm run lint
```

#### Modifier la configuration
Voir [Configuration Reference](https://cli.vuejs.org/config/).

## Credits

Ce projet a été construit avec [Bootstrap 5.0](https://github.com/twbs/bootstrap), [Vue Router 4](https://github.com/vuejs/vue-router-next) et [OpenTDB](https://opentdb.com/api_config.php)


## License

[MIT](https://github.com/Inkapa/quiz-app/blob/master/LICENSE)
