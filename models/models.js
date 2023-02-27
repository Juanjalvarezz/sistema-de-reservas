var equipos= [
    {
      serial: "001",
      nombre: "Pc",
      descripcion: "Equipo 8GB de RAM",
      fecha_de_adquisicion: "26-02-2019",
      estatus: "ocupado",
    }
],
espacios=[  
    {  
     nombre: "Audio Visuales",  
     descripcion: "Sala 3x3",
     direccion: "Av Pincipal",
     estatus: "ocupado"
    }  
],
personal_tecnico=[  
    {  
     cedula: "12.123.123",
     nombre_y_apellido: "Arturo Bermeja", 
     cargo: "Ing. Computacion",
     usuario: "arturito",
     contraseña: "excalibur",
     especialidad: "Servicio Tecnico"
    }
],
solicitantes=[  
    {  
    cedula: "23.234.234",  
    nombre_y_apellido: "Lolita Fresa",
    fecha_de_nacimiento: "12-12-2002",
    direccion: "Carvajal",
    usuario: "lola",
    contraseña: "123",
    telefono: "0424-055-5555"
    }
],
trabajos=[  
    {  
    id: "001",
    fecha_inicio: "",
    fecha_de_culminacion: "",  
    personal_tecnico: "Arturo Bermeja",
    reserva: "",  
    equipo: "Pc"
    }
],
reservas=[  
    {  
    solicitante: "Lolita Fresa",
    fecha_inicio: "26-02-2023",
    fecha_de_culminacion: "27-02-2023",
    motivo: "Realizacion de Proyecto",
    personal_tecnico: "Arturo Bermeja",
    equipo: "Pc",
    espacio: "Audio Visuales"
    }  
]
module.exports = {equipos, espacios, personal_tecnico, solicitantes, trabajos, reservas};