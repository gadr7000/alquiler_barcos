var express = require("express");
var GamaController = require("../controllers/gamas.controllers");

var routerGamas = express.Router();

routerGamas.get("/ListarGamas", GamaController.VerGamas);
routerGamas.post("/GuardarGama", GamaController.guardarGama);
/*
routerGamas.post("/testeando", GamaController.testeando);
routerGamas.post("/login", GamaController.login);
routerGamas.post("/guardarUsuario", GamaController.save);
routerGamas.put("/actualizar/:id",GamaController.update);
routerGamas.delete("/eliminar/:id",GamaController.delete);
routerGamas.get("/usuarios",GamaController.listarUsuarios);
routerGamas.get("/usuarios/:id",GamaController.verUsuario);
*/
module.exports = routerGamas;
