var express = require('express');
var router = express.Router();

var reservasControllers = require('../controllers/reservas')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(reservasControllers.listar());
});

router.get('/:fecha', function(req, res, next){
    let reserva = req.params.fecha
    res.send(reservasControllers.mostrar(reserva))
});

router.get('/:fecha1/:fecha2', function(req, res, next){
  let reserva = {
    fecha_i: req.params.fecha1,
    fecha_f: req.params.fecha2,
  }
  res.send(reservasControllers.mostrar_varias(reserva));
})

router.post('/', function(req, res, next){
  let reserva = req.body
  res.send(reservasControllers.crear(reserva));
})

router.put('/', function(req, res, next){
  let reserva = req.body
  res.send(reservasControllers.editar(reserva));
})


router.delete('/', function(req, res, next){
  let reserva = req.body
  res.send(reservasControllers.eliminar(reserva));
})

module.exports = router;
