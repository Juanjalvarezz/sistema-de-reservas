const {personal_tecnico} = require("../models/models");

class personal_tecnicoController {
    
    Listar(){
      console.log('Listado')
      return personal_tecnico;
    }
  
  
    crear(newpersonal_tecnico){
      personal_tecnico.push(newpersonal_tecnico);
      console.log("Se ha creado un personal tecnico");
      return (personal_tecnico);
    }
  
  
    Buscar(dni){
      var ci = + dni;
      var search = personal_tecnico.findIndex(u => u.id == ci)
      var res = "El id -- " + ci + "-- corresponde al tecnico: " + personal_tecnico[search].nombre_y_apellido + " de especialidad: " + personal_tecnico[search].especialidad;
      return(res);
    }
  
  
    Actualizar(dni , newpersonal_tecnico){
      var id = + dni;
      var search = personal_tecnico.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El tecnico con id " + id + " no existe");
      }else if(personal_tecnico[search].id == id){ 
        console.log("El tecnico con id "+ id + " sera actualizado");
        console.log(personal_tecnico[search]);
        personal_tecnico[search]= newpersonal_tecnico;
        console.log("El tecnico ha sido actualizado");
        console.log(personal_tecnico[search]);
      }
    }
  
    Eliminar(dni){
      var id = + dni;
      var search = personal_tecnico.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El tecnico con id " + id + " no existe");
      }else if(personal_tecnico[search].id == id){
        console.log("El tecnico con id "+ id + " ha sido eliminado ");
        personal_tecnico.splice(search,1);
      }
    }
  } 
  
  module.exports = new personal_tecnicoController();