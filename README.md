# Memegram | Diplomatura.js | Grupo 4

## Setup

Crear tu configuración local [`.env`](/.env) a partir de [`.env.example`](/.env.example).

```bash
cd commons
cp .env.example .env
```

Instala las dependencias:

```bash
npm install
```

## Start Dev

```bash
npm start
```

## Build

```bash
npm run build
```

## Deployment

URL: [https://memegramfw.herokuapp.com](https://memegramfw.herokuapp.com)

### Init

```bash
npm run deploy:init
```

### Config

Se deben configrurar todas las variables en [`.env`](commons/.env) en _Heroku_.

[https://devcenter.heroku.com/articles/config-vars](https://devcenter.heroku.com/articles/config-vars)

```bash
# Set
npx heroku config:set VAR_NAME=var-value

# View config
npx heroku config
npx heroku config:get VAR_NAME
```

### Deploy

```bash
npm run deploy
```

### Logs

[https://devcenter.heroku.com/articles/logging](https://devcenter.heroku.com/articles/logging)

```bash
npx heroku logs -n 100
npx heroku logs -n 100 --tail
```
