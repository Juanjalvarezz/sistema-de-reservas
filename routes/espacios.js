var express = require('express');
const app = require('../app.js');
const espacios = require('../controllers/espacios');
var router = express.Router();
var espaciosController = require("../controllers/espacios")


//lISTAR LOS ESPACIOS
router.get('/', function(req, res, next) {
    res.send(espaciosController.Listar());
  
  });
  
  //SUBIR UN ESPACIO
  router.post('/', function(req, res, next) {
    const eqç = espaciosController.crear(req.body);
    res.send(espacios);
  });
  
  
//BUSCAR UN ESPACIO
router.get("/:id", function(req, res, next) {
  res.send(espaciosController.Buscar(req.params.id));

});

//ACTUALIZAR UN ESPACIO
router.patch("/:id", function(req, res, next) {
  res.send(espaciosController.Actualizar(req.params.id , req.body));
  
});

//ELIMINAR UN ESPACIO
router.delete("/:id", function(req, res, next) {
  res.send(espaciosController.Eliminar(req.params.id));
});

   
  module.exports = router;
  