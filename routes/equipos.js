
var express = require('express');
const app = require('../app.js');
const equipos = require('../controllers/equipos');
var router = express.Router();
var equiposController = require("../controllers/equipos")



//lISTAR LOS EQUIPOS
router.get('/', function(req, res, next) {
  res.send(equiposController.Listar());

});

//SUBIR UN EQUIPO
router.post('/', function(req, res, next) {
  const eqç = equiposController.crear(req.body);
  res.send(equipos);
});

//BUSCAR UN EQUIPO
router.get("/:id", function(req, res, next) {
  res.send(equiposController.Buscar(req.params.id));

});

//ACTUALIZAR UN EQUIPO
router.patch("/:id", function(req, res, next) {
  res.send(equiposController.Actualizar(req.params.id , req.body));
  
});

//ELIMINAR UN EQUIPO
router.delete("/:id", function(req, res, next) {
  res.send(equiposController.Eliminar(req.params.id));
});

module.exports = router;
