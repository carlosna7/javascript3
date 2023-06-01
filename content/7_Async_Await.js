const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve ("Promise cincoMil resolvida"), 5000)
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve ("Promise mil resolvida"), 1000)
});

const quinentos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve ("Promise quinentos resolvida"), 500)
});

const cem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve ("Promise cem resolvida"), 100)
});

const resolution = async () => {
    const resultado1 = await cincoMil();
    console.log("a")
    const resultado2 = await mil();
    console.log("a")
    const resultado3 = await quinentos();
    console.log("a")
    const resultado4 = await cem();
    console.log("a")

    console.log(`Mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`)
}

resolution();