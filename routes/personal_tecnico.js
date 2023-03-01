var express = require('express');
var router = express.Router();
var personal_tecnicoController = require('../controllers/personal_tecnico');

/* GET personal_tecnico listing. */
router.get('/', function(req, res, next) {
  res.send(personal_tecnicoController.Listar());
});

/* POST personal_tecnico create. */
router.post('/', function(req, res, next) {
 
  const personal_tecnico = personal_tecnicoController.crear(req.body);
  res.send(personal_tecnico);

});

/* GET personal_tecnico search. */
router.get("/:id", function(req, res, next) {

  res.send(personal_tecnicoController.Buscar(req.params.id));

});

/* PATCH personal_tecnico update. */
router.patch("/:id", function(req, res, next) {

  res.send(personal_tecnicoController.Actualizar(req.params.id , req.body));
  
});

/* DELETE personal_tecnico delete. */
router.delete("/:id", function(req, res, next) {

  res.send(personal_tecnicoController.Eliminar(req.params.id));
  
});

module.exports = router;