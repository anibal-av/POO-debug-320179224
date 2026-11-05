function generarUsuarioTemporal(plantilla) {
  const copia = { ...plantilla };
  copia.rol = "invitado";
  copia.configuracion.notificaciones = false;
  return copia;
}

const usuarioAdmin = {
  rol: "admin",
  configuracion: {
    notificaciones: true,
    tema: "oscuro"
  }
};

const usuarioTemp = generarUsuarioTemporal(usuarioAdmin);
console.log(usuarioAdmin.configuracion.notificaciones);
