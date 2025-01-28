# Crear proyecto

npx create-react-app ticketing-system

## Ir al proyecto

### `cd ticketing-system`

## Instalar el paquete web-vitals

### `npm install web-vitals`

## Agregar homepage a package.json

{
  "name": "ticketing-system",
  "homepage": "https://jhonny-berdeja.github.io/ticketing-system",
  ...
}

## Agregar predeploy y deploy a script de package.json

  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }

## Hasta aqui ya configuramos el proyecto para poder deployar en github pages

## Para deployar siempre debe ser desde una rama nueva a partir de 'local'

## A partir de 'local' creamos la nueva rama

### `git checkout -b gh-pages`

## Construimos el ejecutable del proyecto

### `npm run build`

## Deployamos el proyecto

### `npm run deploy`

## Luego de 5 minututos aproximadamente accesdemos a

[https://jhonny-berdeja.github.io/ticketing-system](https://jhonny-berdeja.github.io/ticketing-system)
