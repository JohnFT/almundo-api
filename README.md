# Almundo-API
Este proyecto es una API REST Nodejs con [Express framework](http://expressjs.com/es/) + [TypeScript](https://www.typescriptlang.org/) +
[Swagger](https://swagger.io/) expone un crud a la entidad Hotels almundo.

Despues de clonar el proyecto:

```
 > npm install
```

## Build

Ejecuta el comando `npm start` para creara una carpeta dist con los archivos traspilados a ES5

```
> npm run build
```

## Start Server

Ejecute el comando `npm run start` ppara desplegar el servidor en modo deploy debug, 
esta configurado en el puerto 3000 http://localhost:3000

```
> npm run start
```

## Estructura del proyecto
 ```
--src
---api
----controller
----data
----service
---public
----icons
----images
---server
```

### Api
Contiene la implementación de los endpoints y controlladores de la aplicación

#### Endpoints Disponibles
```
GET /api/v1/hotels // lista los hoteles 
GET /api/v1/hotels/:id // Obtener Hotel id
POST /api/v1/hotels/ Adicionar hotel
DELETE /api/v1/hotels/:id // Eliminar hotel por id
```

  

### server
Esta capa se encarga de la configuracion del servidor middelwares

### Middelware

Access-Control-Allow-Origin: Permite acceso desde cualquier origen para el consumo de los servicios rest

Body-Parse: Decodifica los objetos json que vienen en la url de request

Swagger: Crea documentacion del os controladores y cliente de purebas de estos http://localhost:3000/api/v1/docs
[Demo](http://localhost:3000/api/v1/docs)

### Public
Assets de la aplicacion

## Nota
Puedes utilizar el cliente web [Almundo-Web](https://github.com/JohnFT/almundo-web)

## Autor

* **John Alexander Fonseca Tumay**
