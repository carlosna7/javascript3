const funcao1 = () => {
    console.log("Sou a função1");

    try {
        codigo;
    } catch (error) {
        console.error(error);
        throw error; // se colocar o throw error aqui ele lança apenas este erro e finaliza o código sem passar para função 2
    }

}

const funcao2 = () => {
    console.log("Sou a função2");

    asdf;

}


const main = () => {
    try {
        funcao1();
        funcao2();
        console.log("Passou por aqui")   
    } catch (error) {
        console.error(error);
    }
}

main()