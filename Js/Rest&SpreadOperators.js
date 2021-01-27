/*
Recebendo número de parâmetros superior
a quantidade da assinatura da function.
 */

// function sum(a, b) {
//     var value = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         value += arguments[i];
//     }
//     return value;
// }
// console.log(sum(5, 5, 5, 2, 3));

/*
Usando o operador REST para melhorara legibilidade do código acima.
Ao usar o operador REST é possível manipular pelos os métodos de ARRAY,
pois o REST recebe uma lista de argumentos e transformando eles em 
um array.
*/
// function sum(...args) {
//     return args.reduce((acc, value) => acc + value, 0); // usando ArrowFunctions invés de functions em blocos
//     console.log(arguments);
// }
// console.log(sum(5, 5, 5, 2, 3));

// /*
// Passar argumentos de uma função para outra função com ECMAScript 6
//  */

//Antes do ECMAScript 6

// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

// const sum = (...rest) => {
//     return multiply.apply(undefined, rest);
// };
// console.log(sum(5, 5, 5, 2, 3));

// /* Com ECMAScript 6 Usando o spread operator 
// O spread vai pegar todos os objetos do array
//  e transforma-los em parâmetros para a função 
//  */
// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

// const sum = (...rest) => {
//     return multiply(...rest);
// };
// console.log(sum(5, 5, 5, 2, 3));

// // strings, arrays, objects e objetos iteraveis.

// /* Strings 
// Ao usar o SPREAD em string o conteúdo desta será uma lista de char
// na function.
// */
// const str = 'Digital Innovation One';

// function logArgs(...args) {
//     console.log(args);
//     //console.log(arguments)
// }
// logArgs(...str);

// /*Array 
// Ao usar o SPREAD cada item do array entra como argumento da função.
// */
// const arr = [1, 2, 3, 4];

// function logArgs(a, b, c) {
//     console.log(a, b, c);
// }
// logArgs(...arr);

//Construindo array com spread, combinando dois arrays.
// const arr = [1, 2, 3]
// Sem spread
// const arr2 = [4, 5, 6].concat(arr);
// Com spread
// const arr2s = [...arr, 4, 5, 6];
// const arr3 = [...arr, ...arr2s, 0, 0, 0, 0]
// console.log(arr3)

// /*
// Usando spread em Objetos literais
// É possível usar apenas na construção de novos objetos. 
// */
// const obj = {
//     test: 123
// };
// const obj2 = {
//     ...obj,
//     test2: 'hello'
// };
// console.log(obj2);