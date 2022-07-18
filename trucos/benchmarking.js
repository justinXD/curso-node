console.time('todo'); //lo podemos usar para saber en cuanto tiempo se ejecuta nuestro codigo
let suma = 0;
let suma2 = 0;
console.time('bucle') //similar al console.group pero este nos arroja un tiempo
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
    
}
console.timeEnd('bucle');
console.time('bucle2') //similar al console.group pero este nos arroja un tiempo
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
    
}

console.timeEnd('bucle2');

console.time('asincrono');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    })
console.timeEnd('todo')

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })
}