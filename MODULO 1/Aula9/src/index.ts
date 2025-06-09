//HERANÇA => Reproveitar caracteristicas(atributos) e comportamentos(métodos)
//POLIMORFISMO => Implementar diferentes estratégias para mesma ação
//ABSTRAÇÃO => definir apenas o tipo e contratos( atribu/método) que devem ser implementados

// class Pessoa{
//   nome:string;

//   public constructor(nome: string){
//     this.nome = nome;
//   }
// }

// abstract class Animal{
//   nome: string;
//   idade: number;
//   dono: Pessoa;

//   public constructor(nome: string, idade: number, dono: Pessoa){
//     this.nome = nome;
//     this.idade = idade;
//     this.dono = dono;
//   }

//   public abstract emitirSom(): void;

// }

// class Cachorro extends Animal{
//   public emitirSom(): void {
//     console.log(`[${this.nome} latiu]: AU AU AU`)
//   }
// };

// class Gato extends Animal{
//   public afiarUnhar(): void{
//     console.log(`[${this.nome} esta afiando as unhas]: fiuuun`);
//   }
//   public emitirSom(): void {
//     console.log(`[${this.nome} miou]: MIAU`);
//   }
// };

// class Pato extends Animal{
//   public emitirSom(): void {
//     console.log(`[${this.nome} quaquejou]: QUAK QUAK`);
//   }

// };

// const cachorro1 = new Cachorro("Lulu", 4, new Pessoa("Lucas"));
// const gato = new Gato("pelotas", 4, new Pessoa("Lucas"));
// const pato = new Pato("Patolino", 1, new Pessoa("Lucas"));

// console.log(cachorro1);
// console.log(gato);

// cachorro1.emitirSom();
// gato.emitirSom();
// pato.emitirSom();

// - Teremos uma classe Funcionario
// - Teremos 3 subclasses que herdam de Funcionario:
//   - Gerente
//   - Recepcionista
//   - Estagiario

// - Todo funcionário tem um nome e um salário.
// - Devemos poder exibir os detalhes de todos nosso funcionários.
// - Precisamos de um método para calcular o bônus de cada um de nossos funcionários.

// - Tabela de bônus:
//   - Gerente: 50%
//   - Recepcionista: 30%
//   - Estagiario: 15%


// abstract class Funcionario{
//   private nome: string;
//   private salario: number;


//   public getSalario(){
//     return this.salario;
//   }

//   public getNome(){
//     return this.nome;
//   }

//   public constructor(nome: string, salario: number){
//     this.nome = nome;
//     this.salario = salario;
//   }

//   public detalhesFuncionario():void{
//     console.log(`Nome: ${this.getNome()}\n Salário: ${this.getSalario()}`)
//   };

//   public calcularBonus(bonus:number){

//     const bonusSalario = this.getSalario() + bonus
//     return console.log("A soma do salário + o bonus resulta no valor de ", bonusSalario);
//   }
// }

// class Gerente extends Funcionario{}
// class Recepcionista extends Funcionario{}
// class Estagiario extends Funcionario{}

// const gerente = new Gerente("Lucas", 3500);
// const recepcionista = new Recepcionista("José", 2100);
// const estagiario = new Recepcionista("José", 2100);

// const bonusGerente = gerente.getSalario() * 0.50;
// console.log("Bonus do gerente: ", bonusGerente);

// const bonusRecepcionista = recepcionista.getSalario() * 0.3;
// console.log("Bonus do recepcionista: ", bonusRecepcionista);

// const bonusEstagiario = estagiario.getSalario() * 0.15;
// console.log("Bonus do estagiario: ", bonusEstagiario);


// gerente.detalhesFuncionario();
// gerente.calcularBonus(bonusGerente);

// recepcionista.detalhesFuncionario();
// recepcionista.calcularBonus(bonusRecepcionista);


// estagiario.detalhesFuncionario();
// estagiario.calcularBonus(bonusEstagiario);

enum testes{
  teste1 = "Testando 1",
  teste2 = "Testando 2",
  teste3 = "Testando 3"
}


console.log(Object.values(testes));

function validaCategory(value: string): boolean{
  return Object.values(testes).includes(value as testes);
}

console.log("Verifica se o valor passado existe dentro do enum: ", validaCategory("teste"));
console.log("Verifica se o valor passado existe dentro do enum: ", validaCategory("Testando 1"));
