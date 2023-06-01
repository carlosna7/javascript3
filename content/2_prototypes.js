const animal = {
    som: "Som de animal",
    tipo: "animal",
    emitirSom: function() {
        console.log(this.som + " " + this.som)
    }
}

const gato = {
    som: "miau",
    tipo: "gato",
}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoBravo = {
    tipo: "gatoBravo",
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoBravo, gato)
gatoBravo.miarForte()