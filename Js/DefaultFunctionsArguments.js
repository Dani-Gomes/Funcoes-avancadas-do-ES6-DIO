//function multiply(a, b) {

/* Abaixo é realizado uma operação ternaria para 
garantir  se o undefined é um valor verdadeiro ,
o problema desta abordagem é quando for enviado um 
0 para multiplicação, pois como o javascript considera o 0 como
false, o valor atribuido será 1 e o resultado será o mesmo valor
da esquerda.
*/
// b = b || 1;

/* Uma outra abordagem para resolucionar essa situação é o uso do
Typeof, mas fica verboso.
*/
// b = typeof b === 'undefined' ? 1 : b

// /* Abordagem utilizando um if
//  */
// if (typeof b === 'undefined') {
//     b = 1;
// }

// return a * b;

//}

/* Solução com o ECMAScript 6 pode ser adicionando o valor padrão 
   nos parâmetros da função 
*/

// function multiply(a, b = 1) {
//     return a * b;
// }

// /*
//  Uma outra solução usando o ECMAScript 6 é referenciar o 
//  parâmetro mais a esquerda
// */

// function multiply(a, b = a) {
//     return a * b;
// }

// /* 
// Usando uma função pra adquirir um valor valor 
// default para um parâmetro de um método
// */
// function randomNumber() {
//     console.log('Genarating a random number...');
//     return Math.random() * 10;
// }

// function multiply(a, b = randomNumber()) {
//     return a * b;
// }
// console.log(multiply(5));