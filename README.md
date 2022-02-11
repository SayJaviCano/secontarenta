# Test cases

https://docs.google.com/spreadsheets/d/1iSpzAOfGMQLu26E5eHjnUNTfwSKWpsLldW2pTdKHExQ/edit#gid=0

# Seconta Renta

Esto es un repositorio de muestra para el testeo de Seconta Renta en Cypress.

- [Iniciar la app](#iniciar-la-app)
- [Scripts](#scripts)
- [Control de versiones (Git)](#control-de-versiones)
- [Entorno de desarrollo](#entorno-de-desarrollo)
- [Buenas prácticas](#buenas-practicas)

## Iniciar la app

Decargar/clonar proyecto.

```
git clone https://github.com/SayJaviCano/secontarenta.git
```

Abrir carpeta `secontarenta` en Visual Studio Code y abrir terminal dentro de Visual Studio Code.

Instalar dependencias

```
npm i
```

## Scripts

Abrir ventana de Cypress

Abre ventana con todos los tests de la aplicación para poder ejecutarlos en el navegador.

```
npm run open
```

Ejecutar tests en terminal.

Ejecuta todos los test en el terminal sin que se vean en un navegador.

```
npm run test:run
```

## Control de Versiones

En este proyecto hay dos ramas destacadas.

- `main`: Rama en la que tendremos el código más estable y que actualizaremos semanal/mensualmente.
- `develop`: Rama desde la que crearemos todas nuestras ramas a la hora de crear nuevos tests.

A la hora de publicar nuestro código en una rama tendremos que hacerlo localmente desde `develop` y, de igual forma, al abrir la Pull Request en Github deberemos apuntarla también a `develop`.

Para sincronizar los cambios localmente lo haremos cambiandonos a la rama `develop` y la actualizaremos con el siguiente comando. Antes de usar este comando hay que tener en cuenta que no se pueden tener cambios sin guardar.

```
git pull --rebase
```

## Entorno de desarrollo

| Aplicación | Descripción                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jira       | Desde esta aplicación gestionaremos todo lo que hay por hacer en cuestion de trabajo. Nos ayudará a controlar que cosas están pendientes por hacer, cuales están en proceso y cuales han sido terminadas                                       |
| Github     | En esta aplicación tendremos todo el código en el que se encuentran los tests                                                                                                                                                                  |
| QA Touch   | En esta aplicación tendremos la definición de los tests que vamos a automatizar. Una descripción de los mismos y los pasos manuales que debe uno seguir para reporducirlos. Se especificará también cuál es el resultado esperado de cada test |


## Actualizar rama

Proceso para actualizar una rama propia a la rama `main`.

- Colocarte en tu rama y guardar/descartar los cambios para estar en un estado sin cambios realizados.
- Colocarte en main y sincronizar en boton 🔄 junto a nombre de rama
- Colocarte en tu rama de nuevo
- En Terminal: 
 ```
git rebase main
```
- Solucionar conflictos decidiendo entre nuestros cambios (incoming) y los de main (current).
- Añadir archivos con conflictos ➕
 ```
git rebase --continue
```

 ```
:qa
```
- Sincronizar cambios de nuevo 

