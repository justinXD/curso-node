//console.log(`algo...`);
//console.info(`algo...`); console.info() funciona igual que console.log(), lo podemos usar para diferenciar eventos
//console.error('algo...'); //ideal para errores porque algunas consolas lo pintan de otro color, ademas lo logea en otro sitio
// console.warn('algo...'); //ideal para advertencias y algunas terminales lo pintan de otro color

// var tabla = [{
//     a: 1,
//     b: 'Z'
// },
// {
//     a: 2,
//     b: 'otra'
// }]
// console.table(tabla); //nos despliega info en consola en forma de tabla

console.group('conversacion') //console.group() os agrupa varios console.log con un nivel de identacion
console.log('hola');
console.log('bla bla bla bla')
console.log('adios')
console.groupEnd('conversacion')

console.log('otra cosa')

console.count('veces') //cuenta en consola. para resetear usamos console.countReset()
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')