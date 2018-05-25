import express from "express";
// Importamos el router de express
var router = express.Router();
//import { Router } from 'express'
// Importamos el modulo controladores.
import controller from '../controllers/'

import mysql from '../config/mysql'
var connection = mysql.connection


console.log("controller", JSON.stringify(controller))
// En la URL /api/usuario, usamos en controlador usuario. || Select de un usuario
router.post('/user/select', controller.selectUsuario);

// En api/usuario/addUsuario llamamos al controlador addUsuario
router.post("/user/add", controller.addUsuario);

// Borrar usuario
router.post('/user/delete', controller.deleteUsuario);

// Esta peticion es PUT. Update usuario
router.put("/user/update", controller.updateUsuario);


module.exports = router;