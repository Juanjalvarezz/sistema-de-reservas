var express = require('express');
var router = express.Router();
var solicitantesController = require('../controllers/solicitantes');

/* GET trabajos listing. */
router.get('/', function(req, res, next) {
  res.send(solicitantesController.Listar());
});

/* POST trabajos create. */
router.post('/', function(req, res, next) {
 
  const solicitante = solicitantesController.crear(req.body);
  res.send(solicitante);

});

/* GET trabajos search. */
router.get("/:id", function(req, res, next) {

  res.send(solicitantesController.Buscar(req.params.id));

});

/* PATCH trabajos update. */
router.patch("/:id", function(req, res, next) {

  res.send(solicitantesController.Actualizar(req.params.id , req.body));
  
});

/* DELETE trabajos delete. */
router.delete("/:id", function(req, res, next) {

  res.send(solicitantesController.Eliminar(req.params.id));
  
});

module.exports = router;