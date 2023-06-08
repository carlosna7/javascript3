// const soma2n = (a, b, c) => {
//     return a + b + c;
// }

// console.log(soma2n(1,2,3))

//------------------------------------------------

// function somaNinf () {
//     const args = Array.from(arguments);
//     let soma = 0;

//     for(let i = 0; i < args.length; i++) {
//         soma += args[i];
//     }

//     return soma;
// }

// console.log(somaNinf(1, 2, 3, 4));

//------------------------------------------------

// function somaNinf1 () {
//     const args = Array.from(arguments);
//     return args.reduce((acumulador1, valorAtual1) => 
//         acumulador1 += valorAtual1
//     )
// }

// console.log(somaNinf1(1, 2, 3, 4))

//------------------------------------------------

// const somaNinf2 = (args) => {
//     return args.reduce((acumulador, valorAtual) =>
//         acumulador += valorAtual
//     )
// }

// console.log(somaNinf2([1, 2, 3, 4]))

//------------------------------------------------

const rockets = [
    {city:"brasa1", launches: 10},
    {city:"brasa2", launches: 20},
    {city:"brasa3", launches: 4},
    {city:"brasa4", launches: 6}
]

const ttlLaunches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);

console.log(ttlLaunches);