import express from "express";
// Importamos el router de express
var router = express.Router();
//import { Router } from 'express'
// Importamos el modulo controladores.
import controller from '../controllers/'

import mysql from '../config/mysql'
var connection = mysql.connection


console.log("controller", JSON.stringify(controller))

// Rutas CRUD Usuario
// Seleccionar un usuario || lOGIN
router.post('/user/select', controller.selectUsuario);
// Añadir Usuario || SIGN IN || REGISTRO
router.post("/user/add", controller.addUsuario);
// Borrar usuario
router.post('/user/delete', controller.deleteUsuario);
// Update usuario
router.put("/user/update", controller.updateUsuario);

// Rutas CRUD Trayecto

// Seleccionar Trayectos
router.post('/trip/select', controller.selectTrayectos);
// Añadir Trayecto
router.post("/trip/add", controller.addTrayecto);
// Borrar Trayecto
//router.post('/trip/delete', controller.deleteTrayecto);
// Update Trayecto
//router.put("/trip/update", controller.updateTrayecto);


module.exports = router;