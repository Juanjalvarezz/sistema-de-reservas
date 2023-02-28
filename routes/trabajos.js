var express = require('express');
var router = express.Router();
var trabajosController = require('../controllers/trabajos');

/* GET trabajos listing. */
router.get('/', function(req, res, next) {
  res.send(trabajosController.Listar());
});

/* POST trabajos create. */
router.post('/', function(req, res, next) {
 
  const trabajo = trabajosController.crear(req.body);
  res.send(trabajo);

});

/* GET trabajos search. */
router.get("/:id", function(req, res, next) {

  res.send(trabajosController.Buscar(req.params.id));

});

/* PATCH trabajos update. */
router.patch("/:id", function(req, res, next) {

  res.send(trabajosController.Actualizar(req.params.id , req.body));
  
});

/* DELETE trabajos delete. */
router.delete("/:id", function(req, res, next) {

  res.send(trabajosController.Eliminar(req.params.id));
  
});

module.exports = router;