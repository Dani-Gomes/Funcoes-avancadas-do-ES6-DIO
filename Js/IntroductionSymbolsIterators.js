//Symbol são indentificadores
// const unifiqueId = Symbol('Hello');
// const obj = {
//     [unifiqueId]: 'Hello'
// };
// console.log(obj);

//Well know symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

// const obj = {
//     [Symbol.iterator]() {

//     }
// }

// const arr = [1, 2, 3, 4]

// /*Interador
// Um objeto é um iterator (iterador) quando sabe como acessar 
// itens numa coleção, um por vez, enquanto mantém rastreada 
// a posição atual em uma dada sequência.
// */

// /*Interface para consumir passo a passo o conteudo 
// de uma lista, array, etc. */

// const it = arr[Symbol.iterator]();
// //Gerando uma interface para interação deste array;
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// //Arry, String, objetos iteraveis

//Criando um objeto interavel para que possa ser pecorrido em um for of.
// const obj = {
//     values: [1, 2, 3, 4],
//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next: () => { // Arrow function
//                 i++;
//                 return {
//                     value: this.values[i - 1],
//                     done: i > this.values.length
//                 };
//             }
//         };
//     }
// };
// const it = obj[Symbol.iterator]();
// console.log(it.next());