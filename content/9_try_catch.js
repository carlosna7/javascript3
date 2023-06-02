const main = () => {
    try {
        codigo
    } catch (error) {
        console.error(`Deu erro no código. E o erro é esse: \n\n${error}\n\n`)
    } finally {
            console.info(`Esse valor sempre sera mostrado`)
    }
}

main();