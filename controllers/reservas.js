const { reservas } = require('../models/models.js');

class reservasControllers {
    
    listar(){
        console.log('***** EL SERVIDOR ENTRO A CONTROLLERS *****')
        return reservas
    }

    mostrar(reserva){
        console.log('***** EL SERVIDOR ENTRO A CONTROLLERS *****')
        let reservas_fecha = []
        for (let i = 0; i < reservas.length; i++) {
            let fecha_inicial = reservas[i].fecha_inicio
            let fecha_final = reservas[i].fecha_de_culminacion
            if (reserva === fecha_inicial || reserva === fecha_final) {
                reservas_fecha.push(reservas[i])
            }
        }
        if (reservas_fecha.length === 0) {
            return('***** NO SE ENCONTRARON RESERVAS EN LA FECHA INDICADA *****')
        }else{
            return reservas_fecha
        }
    }

    mostrar_varias(reserva){
        console.log('***** EL SERVIDOR ENTRO A CONTROLLERS *****')
        let reservas_fecha = []
        for (let i = 0; i < reservas.length; i++) {
            if (Date.parse(reservas[i].fecha_inicio) >= Date.parse(reserva.fecha_i) || Date.parse(reservas[i].fecha_de_culminacion) >= Date.parse(reserva.fecha_i)) {
                if (Date.parse(reservas[i].fecha_inicio) <= Date.parse(reserva.fecha_f)) {
                    reservas_fecha.push(reservas[i])
                }
            }
        }
        if (reservas_fecha.length === 0) {
            return('***** NO SE ENCONTRARON RESERVAS EN EL RANGO DE FECHA INDICADA *****')
        }else{
            return reservas_fecha
        }
    }

    crear(reserva){
        console.log('***** EL SERVIDOR ENTRO A CONTROLLERS *****')
        if (!reserva.id || !reserva.solicitante || !reserva.fecha_inicio || !reserva.fecha_de_culminacion || !reserva.motivo || !reserva.personal_tecnico || !reserva.equipo || !reserva.espacio) {
          return ("***** No se agregó la reserva, se requiere de la reserva: id, solicitante, fecha_inicio, fecha_de_culminacion, motivo, personal_tecnico, equipo y espacio *****");
        }else{
            for (let i = 0; i < reservas.length; i++) {
                if (reservas[i].id === reserva.id) {
                    return ('***** NO SE PUDO AGREGAR LA RESERVA PORQUE POSEE UN ID REPETIDO *****')
                }
            }
            reservas.push(reserva);
            return ("***** RESERVA AGREGADA EXITOSAMENTE *****")
        }
    }

    editar(reserva){
        console.log('***** EL SERVIDOR ENTRO A CONTROLLERS *****')
        if (!reserva.id || !reserva.solicitante || !reserva.fecha_inicio || !reserva.fecha_de_culminacion || !reserva.motivo || !reserva.personal_tecnico || !reserva.equipo || !reserva.espacio) {
            return ("***** No se edito la reserva, se requiere de la reserva: id, solicitante, fecha_inicio, fecha_de_culminacion, motivo, personal_tecnico, equipo y espacio *****");
        }else{
            for (let i = 0; i < reservas.length; i++) {
                if (reservas[i].id === reserva.id) {
                    reservas.splice(i, 1)
                    reservas.push(reserva)
                    return ('***** SE HA EDITADO PERFECTAMENTE LA RESERVA CON EL ID ' + reserva.id + ' *****')             
                }
            }
            return ('***** NO SE HA EDITADO NINGUNA RESERVA PORQUE EL ID QUE USTED INDICO NO EXISTE *****')
        }
    }

    eliminar(reserva){
        console.log('***** EL SERVIDOR ENTRO A CONTROLLERS *****')
        if (!reserva.id) {
            return ('***** NO SE PUDO ELIMINAR LA RESERVA, DEBE INGRESAR EL ID DE LA RESERVA *****')
        }else{
            for (let i = 0; i < reservas.length; i++) {
                if (reservas[i].id === reserva.id) {
                    let reservaEliminado = reservas.splice(i, 1);
                    console.log('***** RESERVA ELIMINADA *****')
                    console.log(reservaEliminado)
                    return ('***** SE HA ELIMINADO CON EXITO EL EQUIPO *****');
                }
            }
            return ('***** NO SE HA ENCONTRADO UNA RESERVA CON EL ID INDICADO *****')
        }
    }
}

const reservasController = new reservasControllers;
module.exports = reservasController;