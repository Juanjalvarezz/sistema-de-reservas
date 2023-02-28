const {trabajos} = require("../models/models");

class trabajosController {
    
    Listar(){
      console.log('Listado')
      return trabajos;
    }
  
  
    crear(newtrabajo){
      trabajos.push(newtrabajo);
      console.log("Se ha creado un usuario");
      return (trabajos);
    }
  
  
    Buscar(dni){
      var id = + dni;
      var search = trabajos.findIndex(u => u.id == id)
      var res = "El id -- " + id + "-- corresponde a la reserva de: " + trabajos[search].reserva;
      return(res);
    }
  
  
    Actualizar(dni , newtrabajo){
      var id = + dni;
      var search = trabajos.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El trabajo con id " + id + " no existe");
      }else if(trabajos[search].id == id){ 
        console.log("El trabajo con id "+ id + "sera actualizado");
        console.log(trabajos[search]);
        trabajos[search]= newtrabajo;
        console.log("El trabajo ha sido actualizado");
        console.log(trabajos[search]);
      }
    }
  
    Eliminar(dni){
      var id = + dni;
      var search = trabajos.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El trabajo con id " + id + " no existe");
      }else if(trabajos[search].id == id){
        console.log("El trabajo con id "+ id + " ha sido eliminado ");
        trabajos.splice(search,1);
      }
    }
  } 
  
  module.exports = new trabajosController();