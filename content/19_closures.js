// function init() {
//     const nome = "Uma string";
//     function mostraNome() {
//         console.log(nome);
//     }
//     mostraNome();
// }

// init();

//-------------------------------------------------

// function init() {
//     const nome = "Uma string";
//     function mostraNome() {
//         console.log(nome);
//     }
//     mostraNome();
// }

// const minhaFuncao = init();

// minhaFuncao();

//--------------------------------------------------

// function init() {
//     const nome = "Uma string";
//     const idade = "100";

//     function mostraNome() {
//         console.log(nome);
//     }

//     function mostraIdade() {
//         console.log(idade);
//     }

//     return {
//         mostraNome: mostraNome,
//         mostraIdade: mostraIdade
//     };
// }

// const minhaFuncao = init();

// minhaFuncao.mostraNome();
// minhaFuncao.mostraIdade();

//---------------------------------------------
function soma(num1) {
    return (num2) => {
        if(!num2) {
            return num1;
        }
        return soma(num1 + num2);
    }
}

console.log(soma(12)(3)(5)(15)())