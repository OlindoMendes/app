# app

## Project setup
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Esse projeto faz a requisição da API do github usando grapghql e vue-apollo.

O usuário pode buscar por cada usuário cadastrado ou pelo repositório.

Foi utilizado vuex para o gerenciamento dos repositórios favoritos.

Obs: caso retorne 401, é necessário que se atualize o token em vue-apollo.js, gerando um token no github.
