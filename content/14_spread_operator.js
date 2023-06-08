// const listaNumeros = [1, 2, 3]

// const  somaTresNumeros = (num1, num2, num3) => {
//     return num1 + num2 + num3;
// }

// console.log(somaTresNumeros(...listaNumeros))

// const listaNumeros1 = [1, 2, 3]
// const listaNumeros2 = [4, 5, 6]

// const listaNumerosTotal1 = listaNumeros1.concat(listaNumeros2)
// const listaNumerosTotal2 = [...listaNumeros1, ...listaNumeros2]

// const objne1 = {a: 1, b: 1}
// const objne2 = {aa: 2, bb: 2}
// const objne3 = {aaa: 3, bbb: 3}
const objno1 = {a: 1, b: 1}
const objno2 = {aa: 2, bb: 2}
const objno3 = {aaa: 3, bbb: 3}

// const objNew = Object.assign(objne1, objne2, objne3)
const objNovo = {...objno1, ...objno2, ...objno3}

// console.log(objNew)
console.log(objNovo)