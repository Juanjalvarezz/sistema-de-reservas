var equipos= [
    {
      id: "001",
      serial: "001",
      nombre: "Pc",
      descripcion: "Equipo 8GB de RAM",
      fecha_de_adquisicion: "26-02-2019",
      estatus: "ocupado",
    },
    {
      id: "002",
      serial: "002",
      nombre: "Laptop",
      descripcion: "Equipo 16GB de RAM",
      fecha_de_adquisicion: "25-05-2018",
      estatus: "disponible",
    }
],
espacios=[  
    { 
     id:"001", 
     nombre: "Audio Visuales",  
     descripcion: "Sala 3x3",
     direccion: "Av Pincipal",
     estatus: "ocupado"
    },
    { 
     id:"002", 
     nombre: "Sala de Computo",  
     descripcion: "Sala 5x5",
     direccion: "Av Pincipal",
     estatus: "disponible"
    }
],
personal_tecnico=[  
    {
     id:"001",     
     cedula: "12.123.123",
     nombre_y_apellido: "Arturo Bermeja", 
     cargo: "Ing. Computacion",
     usuario: "arturito",
     contraseña: "excalibur",
     especialidad: "Servicio Tecnico"
    },
    {
     id:"002",     
     cedula: "11.111.111",
     nombre_y_apellido: "Chapulin charles", 
     cargo: "Ing. Computacion",
     usuario: "ramon",
     contraseña: "123",
     especialidad: "Servicio Tecnico"
    }
],
solicitantes=[  
    {
    id:"001",  
    cedula: "23.234.234",  
    nombre_y_apellido: "Lolita Fresa",
    fecha_de_nacimiento: "12-12-2002",
    direccion: "Carvajal",
    usuario: "lola",
    contraseña: "123",
    telefono: "0424-055-5555"
    },
    {
    id:"002",  
    cedula: "22.222.222",  
    nombre_y_apellido: "Alvarez",
    fecha_de_nacimiento: "13-13-2003",
    direccion: "Carvajal",
    usuario: "alv",
    contraseña: "123",
    telefono: "0414-055-5555"
    }
],
trabajos=[  
    {  
    id: "001",
    fecha_inicio: "26-02-2023",
    fecha_de_culminacion: "27-02-2023",  
    personal_tecnico: "Arturo Bermeja",
    reserva: "Lolita Fresa",  
    equipo: "Pc"
    },
    {  
    id: "002",
    fecha_inicio: "25-05-2023",
    fecha_de_culminacion: "26-05-2023",  
    personal_tecnico: "Chapulin charles",
    reserva: "Alvarez",  
    equipo: "Laptop"
    }
],
reservas=[  
    {
    id:"001",  
    solicitante: "Lolita Fresa",
    fecha_inicio: "26-02-2023",
    fecha_de_culminacion: "27-02-2023",
    motivo: "Realizacion de Proyecto",
    personal_tecnico: "Arturo Bermeja",
    equipo: "Pc",
    espacio: "Audio Visuales"
    },
    {
    id:"002",  
    solicitante: "Alvarez",
    fecha_inicio: "25-05-2023",
    fecha_de_culminacion: "26-05-2023",
    motivo: "Realizacion de Proyecto",
    personal_tecnico: "Chapulin charles",
    equipo: "Laptop",
    espacio: "Sala de Computo"
    }  
]
module.exports = {equipos, espacios, personal_tecnico, solicitantes, trabajos, reservas};
