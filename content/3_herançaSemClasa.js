const Dev = function(nome, idade, tipoDeDev, linguagem) {
    this.nome = nome;
    this.idade = idade;
    this.tipoDeDev = tipoDeDev;
    this.linguagem = linguagem;
    this.saudacao = function() {
        console.log(`Olá, sou ${this.nome}, atuo como dev ${this.tipoDeDev}, trabalho com a linguagem ${this.linguagem} \n\n`);
    }
}

const FrontendDev = function(nome, idade, tipoDeDev, linguagem, framework) {
    const newDev = new Dev(nome, idade, tipoDeDev, linguagem)
    this.framework = framework;
    Object.setPrototypeOf(this, newDev);
}

const BackendDev = function(nome, idade, tipoDeDev, linguagem, bancoDeDados) {
    const newDev = new Dev(nome, idade, tipoDeDev, linguagem)
    this.bancoDeDados = bancoDeDados;
    Object.setPrototypeOf(this, newDev);
}

const frontend1 = new FrontendDev ("Carlos", 22, "Javascript", "Frontend", "React");
const backend1 = new BackendDev ("Carlos", 22, "Node.js", "Backend", "MySql");

console.log(frontend1)
frontend1.saudacao()

console.log(backend1)
backend1.saudacao()