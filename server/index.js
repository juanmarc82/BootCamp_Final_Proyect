'use strict'
import express from 'express';
//Importamos api que expone un API REST (devuelve JSON, para consumir en REACT)
import api from './routes/api';
//Importamos express-session
import session from 'express-session';
//Importamos con require, commonJS lo que se usa sin babel, body-parser para que express pueda leer el body de las peticiones post 
//var bodyParser = require('express'); // common JS, ES5
import bodyParser from 'body-parser';
// Ejecutamos express. Con esto arranca express como servidor web
var app = express();

// Configuración Sesión usuario.
app.use(session({
    secret: 'stopgo',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))



// App.set, API de express para agregarle funcionalidad
// Le decimos a express, con set, que use PUG como render engine de vistas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api)


//Asignación puerto Servidor
app.listen(3001, () =>{
    console.log('<-- Servidor en puerto 3001 -->');
    
})

/*
// Destroy/unset user session
req.session.destroy(function(err) {
    //cal back method
 })
*/