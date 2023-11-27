abstract class Ticket {
  constructor(protected realValue: number) {}

  printValue(): number {
    return this.realValue;
  }
}

class Normal extends Ticket {}

class Vip extends Ticket {
  constructor(realValue: number, private additionalValue: number) {
    super(realValue);
  }

  printValue(): number {
    const total = this.realValue + this.additionalValue;
    return total;
  }
}

class Camarote extends Ticket {
  constructor(realValue: number, private additionalCamaroteValue: number) {
    super(realValue);
  }

  printValue(): number {
    const total = this.realValue + this.additionalCamaroteValue;
    return total;
  }
}


const normalTicket = new Normal(50.0);
console.log("Ingresso Normal - Valor: R$ " + normalTicket.printValue());

const vipTicket = new Vip(50.0, 20.0);
console.log(`Ingresso VIP - Valor: R$ ${vipTicket.printValue()} (Valor Ingresso: R$ ${vipTicket.realValue}, Adicional: R$ ${vipTicket.additionalValue})`);

const camaroteTicket = new Camarote(50.0, 30.0);
console.log(`Ingresso Camarote - Valor: R$ ${camaroteTicket.printValue()} (Valor Ingresso: R$ ${camaroteTicket.realValue}, Adicional Camarote: R$ ${camaroteTicket.additionalCamaroteValue})`);

/*1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.*/



console.log('------>Atividade 2----->');

abstract class Immobile {
  constructor(protected address: string, protected price: number) {}

  get Address(): string {
    return this.address;
  }

  get Price(): number {
    return this.price;
  }
}

class Novo extends Immobile {
  constructor(address: string, price: number, private additionalPrice: number) {
    super(address, price);
  }

  get AdditionalPrice(): number {
    return this.additionalPrice;
  }

  printTotalPrice(): void {
    const total = this.price + this.additionalPrice;
    console.log(`Imovel Novo - Endereço: ${this.Address}, Preço Total: R$ ${total} (Preço Base: R$ ${this.Price}, Adicional: R$ ${this.additionalPrice})`);
  }
}

class Velho extends Immobile {
  constructor(address: string, price: number, private discountPrice: number) {
    super(address, price);
  }

  get DiscountPrice(): number {
    return this.discountPrice;
  }

  printTotalPrice(): void {
    const total = this.price - this.discountPrice;
    console.log(`Imovel Velho - Endereço: ${this.Address}, Preço Total: R$ ${total} (Preço Base: R$ ${this.Price}, Desconto: R$ ${this.discountPrice})`);
  }
}

const novoImovel = new Novo("Rua Pedro Oliveira, 1050", 108000, 25000);
novoImovel.printTotalPrice();

const velhoImovel = new Velho("Rua Pedro Joaquin, 456", 84000, 11000);
velhoImovel.printTotalPrice();



/*2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.*/


console.log('------>Atividade 3----->');


class Animal {
  protected nome: string;
  protected idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  fazerBarulho(): void {
    console.log("O animal faz algum barulho.");
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  latir(): void {
    console.log("O cachorro late: Au Au!");
  }
}

class Gato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  miar(): void {
    console.log("O gato mia: Miau!");
  }
}

class Pato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  grasnar(): void {
    console.log("O pato grasna: Quack!");
  }
}

const cachorro = new Cachorro("Rex", 3);
cachorro.fazerBarulho();
cachorro.latir();

const gato = new Gato("Whiskers", 2);
gato.fazerBarulho();
gato.miar();

const pato = new Pato("Donald", 1);
pato.fazerBarulho();
pato.grasnar();
