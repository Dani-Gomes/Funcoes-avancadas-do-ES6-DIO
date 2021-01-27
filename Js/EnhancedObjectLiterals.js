// Criando o objetos literais antes do ECMAScript 6 

//Primeira forma
// var obj = {
//     prop1: 'Digital Innovation One'
// };
// console.log(obj)

//Segunda forma
// var prop1 = 'Digital Innovation One';
// var obj = {
//     prop1: prop1
// };
// console.log(obj)

// Criando objetos literais com o ECMAScript 6 com um novo shorthand. 
// /* Passa a ser possível omitir o lado direito 
// da atribuição, sem precisar repetir o nome da variável.
//  */

// var prop1 = 'Digital Innovation One';
// var obj = {
//     prop1
// };
// console.log(obj)

/*Também pode ser feito para métodos */

// function method1() {
//     console.log('method called');
// }
// var obj = {
//     method1
// };
// obj.method1();

/* Uma outra forma de declarar métodos é escrevendo direto no objeto*/

// var obj = {
// sum: function(a, b) // É uma função anônima
//     {
//         return a + b;
//     }
// sum(a, b) // Uma outra forma de reescrever a função
// {
//     return a + b;
// }
// };
// console.log(obj.sum(1, 5));

/*É possível diminuir o número de linhas necessárias para adicionar
um novo valor ao objeto e aumentando a legibilidade do código. */

// Antes do ECMAScript 6 
// var propName = 'test';
// var obj = {};
// obj[propName + 'concat'] = 'prop value';
// console.log(obj)

// Com o ECMAScript 6 

// var propName = 'test';
// var obj = {
//     [propName + 'concat']: 'prop value'
// }
// console.log(obj)