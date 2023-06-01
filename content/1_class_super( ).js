class Dev {
    constructor(nome, idade, tipoDeDev, linguagem) {
    this.nome = nome;
    this.idade = idade;
    this.tipoDeDev = tipoDeDev;
    this.linguagem = linguagem;
    }

    saudacao() {
        console.log(`Olá, sou ${this.nome}, atuo como dev ${this.tipoDeDev}, trabalho com a linguagem ${this.linguagem} \n\n`);
    }
}

class FrontendDev extends Dev {
    constructor(nome, idade, linguagem, tipoDeDev, framework) {
    super(nome, idade, tipoDeDev, linguagem);
    this.framework = framework;
    }
}

class BackendDev extends Dev {
    constructor(nome, idade, linguagem, tipoDeDev, bancoDeDados) {
    super(nome, idade, tipoDeDev, linguagem);
    this.bancoDeDados = bancoDeDados;
    }
}

const frontend1 = new FrontendDev ("Carlos", 22, "Javascript", "Frontend", "React");
const backend1 = new BackendDev ("Carlos", 22, "Node.js", "Backend", "MySql");

console.log(frontend1)
frontend1.saudacao()

console.log(backend1)
backend1.saudacao()