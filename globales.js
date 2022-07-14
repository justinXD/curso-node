//console.log(global); podemos ver todo los globales, no usar en codigo de produccion
// let i = 0;
// let intervalo = setInterval(function(){
//     console.log('hola');
//     if (i === 3 ) {
//         clearInterval(intervalo);
//     }
//     i++
// }, 1000);

//setInterval nos puede ser muy util para hacer un numero concreto de peticiones al servisor

setImmediate(function(){
    console.log('hola');
    //console.log(process); con process podemos acceder a toda la informacion del proceso
});
//global.miVariable = 'un valor'; estas es una variable global pero no se recomienda su uso si no es necesario