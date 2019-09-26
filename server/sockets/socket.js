const { IO } = require('../server');

//configuraciones para ver si un usuario se conecto
IO.on('connection', (client) => {

    console.log('usuario conectado');


    //conffiguracion para ver si un usuario se desconecto de nuestra app

    client.on('disconnect', () => {

        console.log('usuario desconectado');
    })


    //Escuchando la variable que se emitio desde el cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        // console.log(mensaje);
        // if (mensaje.usuario) {
        //     callback('Funciono');
        // } else {
        //     callback('no funciono!!');
        // }

        client.broadcast.emit('enviarMensaje', mensaje);


    })

    //Emitir desde el servidor al cliente
    client.emit('enviarMensaje', {
        role: 'Administrador',
        saludo: 'Bienvenido administrador'
    })

})

module.exports = IO;