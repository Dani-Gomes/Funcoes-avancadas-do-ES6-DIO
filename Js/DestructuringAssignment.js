//Atribuindo partes de variáveis em outras variáveis.

//Antes do ECMAScript 6 
// var arr = ['Apple', 'Banana', 'Orange'];
// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];

//Com do ECMAScript 6 
//Destructuring Assignment
// var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
// console.log(apple2);
//Em Arrays Multidimensionais
// var [apple2, banana2, orange2, [tomato2]] = [
//     'Aple',
//     'Banana',
//     'Orange', ['tomato']
// ];
// console.log(apple2, tomato2);
//Em objetos
// var obj = {
//         name: 'Daniel'
//     }
//     //Antes do ECMAScript 6 
// var name = obj.name;
// console.log(name);
// //Com do ECMAScript 6
// var { name: name2 } = obj;
// console.log(name2);

// Destructuring Assignment entre níveis
//Em objetos dentro de objetos
// var obj = {
//     name: 'Daniel',
//     props: {
//         age: 23
//     }
// };

// //Antes do ECMAScript 6 
// var age = obj.props.age;
// console.log(age);

// //Com do ECMAScript 6
// var { props: { age: age2 } } = obj;
// console.log(age2);

// Em array dentro de objetos
// var obj = {
//         name: 'Daniel',
//         props: {
//             age: 23,
//             favoriteColors: ['Black', 'White']
//         }
//     }
//     //Antes do ECMAScript 6 

// var color1 = obj.props.favoriteColors[0];
// console.log(color1);
//Com do ECMAScript 6
// var { props: { age: age2, favoriteColors: [color1, color2] } } = obj;
// console.log(color1);

//Array de objetos
// var arr = [{ name: 'Apple', type: 'fruit' }];

// Antes do ECMAScript 6 
// var fruit1 = arr[0].type;
// console.log(fruit1)
//     Com do ECMAScript 6
// var [{ name: fruitName }] = arr;
// console.log(fruitName)


// Em functions com Arrays
//Antes do ECMAScript 6 
// function sum(arr) {
//     return arr[0] + arr[1]
// }
// console.log(sum([5, 5]))

// Com do ECMAScript 6
// function sum([a, b] = []) {
//     return a + b;
// }
// console.log(sum([5, 5]))

// function sum([a, b] = [0, 0]) { // Com default values
//     return a + b;
// }
// console.log(sum())

// Em functions com Objects

//Antes do ECMAScript 6 
// function sum(obj) {
//     return obj.a + obj.b;
// }
// console.log(sum({ a: 5, b: 5 }));

//Com do ECMAScript 6
// function sum({ a, b }) {
//     return a + b;
// }
// console.log(sum({ a: 5, b: 5 }));