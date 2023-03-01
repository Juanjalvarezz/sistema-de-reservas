var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//REQUERIMIENTO DE RUTAS
var indexRouter = require('./routes/index');
var equiposRouter = require('./routes/equipos');
var espaciosRouter = require("./routes/espacios");
var trabajosRouter = require('./routes/trabajos');
var reservasRouter = require('./routes/reservas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//APP.USE DE LAS RUTAS
app.use("/inicio", indexRouter);
app.use('/equipos', equiposRouter);
app.use('/espacios', espaciosRouter);
app.use('/trabajos', trabajosRouter);
app.use('/reservas', reservasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);  
  res.render('error');
});

//Creando el mensaje del listener del servidor
var PORT = 3001
app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
}); 
module.exports = app;

  // render the error page
  res.status(err.status || 500);  
  res.render('error');
});

//Creando el mensaje del listener del servidor
var PORT = 3001
app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
}); 

module.exports = app;
