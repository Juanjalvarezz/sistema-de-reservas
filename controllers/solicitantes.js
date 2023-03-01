const {solicitantes} = require("../models/models");

class solicitantesController {
    
    Listar(){
      console.log('Listado')
      return solicitantes;
    }
  
  
    crear(newsolicitante){
      solicitantes.push(newsolicitante);
      console.log("Se ha creado un nuevo solicitante");
      return (solicitantes);
    }
  
  
    Buscar(dni){
      var id = + dni;
      var search = solicitantes.findIndex(u => u.id == id)
      var res = "El id -- " + id + "-- corresponde al solicitante: " + solicitantes[search].nombre_y_apellido;
      return(res);
    }
  
  
    Actualizar(dni , newsolicitante){
      var id = + dni;
      var search = solicitantes.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El solicitante con id " + id + " no existe");
      }else if(solicitantes[search].id == id){ 
        console.log("El solicitante con id "+ id + "sera actualizado");
        console.log(solicitantes[search]);
        solicitantes[search]= newsolicitante;
        console.log("El solicitante ha sido actualizado");
        console.log(solicitantes[search]);
      }
    }
  
    Eliminar(dni){
      var id = + dni;
      var search = solicitantes.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El solicitante con id " + id + " no existe");
      }else if(solicitantes[search].id == id){
        console.log("El solicitante con id "+ id + " ha sido eliminado ");
        solicitantes.splice(search,1);
      }
    }
  } 
  
  module.exports = new solicitantesController();