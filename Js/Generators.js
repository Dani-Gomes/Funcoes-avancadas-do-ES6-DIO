// Generators são funções com pause.

// function* hello() {
//     console.log('Hello');
//     yield 1;

//     console.log('From');
//     const value = yield 2;

//     console.log(value);

// }
// const it = hello();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next('outside!')); // Os valores podem ser enviandos para ter uma mensagem diferente

// function* naturalNumbers() {
//     let number = 0.
//     while (true) {
//         yield number;
//         number++;
//     }
// }

// const it = naturalNumbers();
// console.log(it.next());

//Usando generator com interface

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}
for (let value of obj) {
    console.log(value);
}