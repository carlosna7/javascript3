function somaNinf1 (args) {
    return args.reduce((acumulador, valorAtual) =>
        acumulador += valorAtual
    )
}

console.log(somaNinf1([1, 2, 3, 4]))

//----------------------------------------------------

const somaNinf2 = (...args) => {
    return args.reduce((acumulador, valorAtual) =>
        acumulador += valorAtual
    )
}

console.log(somaNinf2(1, 2, 3, 4))

//----------------------------------------------------

const somaNinf3 = (multiplicador, ...args) => {
    return args.map((num) => {
        return multiplicador * num
    })
}

console.log(somaNinf3(2, 1, 2, 3, 4))