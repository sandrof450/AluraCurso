class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    falarSeuNome(){
        console.log(`Meu nome é ${this.nome}`)
    }

    seApresentar(){
        this.falarSeuNome();
        console.log(`Eu tenho ${this.idade}`);
    }
}

const pessoa1 = new Pessoa("Pedor", 23);
const pessoa2 = new Pessoa("Pe", 29);
pessoa1.falarSeuNome();
pessoa2.seApresentar();