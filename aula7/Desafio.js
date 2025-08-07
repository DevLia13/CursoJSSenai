console.log("Bem-vindo a nossa reserva de mesas!")
console.log( `Padrão	Mesa comum (4 pessoas)  	R$ 50 por pessoa
VIP	Mesa espaçosa    (6 pessoas)	R$ 80 por pessoa
Varanda	Vista externa   (4 pessoas)	R$ 100 por pessoa`)

let nome = prompt("Digite seu nome: ")
let mesa = prompt("Digite o Tipo de mesa desejado: ").toLowerCase().trim()
let número_de_pessoas = Number(prompt("Digite o número de pessoas que iram comer na mesa: "))

let consumo_minimo;
let valor_total;

switch (mesa) {

  case "mesa comum":
    consumo_minimo = 50
    valor_total = consumo_minimo * número_de_pessoas;
    console.log(valor_total);
    break;

  case "mesa espaçosa":
    consumo_minimo = 80
    valor_total = consumo_minimo * número_de_pessoas;
    console.log(valor_total);
    break;

    case "varanda vista externa":
    consumo_minimo = 100
    valor_total = consumo_minimo * número_de_pessoas;
    console.log(valor_total);
    break;

  default:
    console.log("Erro!!! tipo de mesa tente novamente");
    return;
}