const funcao1 = () => {
    
    try {
        funcao2();
    } catch (error) {
        console.error(error);
        throw error;
    }

}

const funcao2 = () => {
    
    try {
        funcao3();
    } catch (error) {
        console.error(error);
        throw error;
    }

}

const funcao3 = () => {
    
    try {
        throw new Error("Deu erro na função 3")
    } catch (error) {
        console.error(error);
        
        throw error;
    }

} 

const main = () => {
    try {
        funcao1(); 
    } catch (error) {
        console.error(error);
    }
    console.log("Passou por aqui") 
}

main();