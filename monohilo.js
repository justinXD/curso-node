console.log('hola mundo');

let i = 0;

setInterval(function(){
   console.log(i)
   i++
//    if (i === 5) {
//         var a = 3 + z //esto va a dar un error
//    }
   /*si cometemos un error, al momento de ejecutarse el codigo y llegar al error todo el proceso se va a detener*/ 
}, 1000);

console.log('segunda instruccion') //primero se va a ejecutar el primer console.log, se va a leer el interbalo y como es un bucle largo lo va a mandar al threadpool
//ejecutara el siguiente console.log y despues iniciara a ejecutar el intervalo, esto es asincrono