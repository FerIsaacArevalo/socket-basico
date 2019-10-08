var socket = io();

//EL METODO ON es para escuchar algo (eventos, etc)
//Configuracion para ver si estamos activos con el servidor (activo activo)
socket.on('connect', function() {
    console.log('conectado al servidor');
})

//Configuracion para ver si perdimos conexión con el servidor (activo desactivo)
socket.on('disconnect', function() {
    console.log('desconectado del servidor');
})


//EL METODO EMIT ES PARA EMITIR ALGO
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    edad: 24
}, function(resp) {
    console.log(resp);
})


//Metodo on para escuchar lo que el servidor nos envio
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
})