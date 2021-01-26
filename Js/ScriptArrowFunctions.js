// // As funções em javascript são de primeira classe.

// // // Funções anônimas 

// // Arrow Functions 

// // var sum = (a, b) => a + b

// // var sum = (a, b) => {
// //     return a + b;
// // }

// // //Pode ocultar os parentêses quando houver apenas um argumento
// // var sum = a => a;;

// // console.log(sum(5, 15));

// // //Retornar objetos literais com retornos implicitos

// // var createObj = () => ({ test: 123 });

// // console.log(createObj);

// //Contexto de invocação

// var obj = {
//     showContext: function showContext() {
//         this.log('teste');
//         //Poderia chamar:
//         // this.log('test');

//         /* funções de eventlistener são executadas no contexto global
//         o código abaixo não vai funcionar
//         */
//         setTimeout(function() {
//             this.log('after 1000ms')
//         }, 1000);

//         /* Uma forma de correção antiga era fixar o contexto,
//         ou colocar uma variável que recebesse o contexto atual.
//         */

//         //Com o Bind
//         // setTimeout(function() {
//         //     console.log('after 1000ms')
//         // }.bind(this), 1000);

//         // // Com a variável
//         // var _that = this;
//         // setTimeout(function() {
//         //     _that.log('after 1000ms')
//         // }, 1000);

//         // //Solução como arrowFunction

//         setTimeout(() => {
//             this.log('after 1000ms')
//         }, 1000);

//     },
//     log: function log(value) {
//         console.log(value);
//     }
// };
// obj.showContext();