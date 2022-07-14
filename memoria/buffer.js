//let buffer = Buffer.alloc(1); //nos permire reservar espacio en memoria ram

//let buffer = Buffer.from([1, 2, 5]); //escribe en el buffer

//let buffer = Buffer.from('hola');

let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
    
}
console.log(abc.toString());
//console.log(buffer)