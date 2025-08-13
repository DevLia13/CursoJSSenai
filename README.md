Desemvolvimeno em JS - Senai 

function calcularImc(peso, altura) {
  return peso / altura ;
}

function thaisCarla(tipo) {
  const mensagem = `Olá, ${nome}! você esta ${tipo}!`;
  return mensagem;
}

var nome = prompt("Digite seu nome: ");
var peso = prompt("Digite o seu peso:" );
var altura = prompt("Digite o sua altura:" );

var IMC = calcularImc(peso, altura)

if (IMC < 18,5 ) {
    let tipo = "desnutrido"
    console.log(thaisCarla(tipo));
} 
else if (IMC >= 18,5 && IMC <24,9){
    let tipo = "no peso normal"
    console.log(thaisCarla(tipo));
} 
else if (IMC >= 25 && IMC < 35 ){
    let tipo = "com obesidade 1"
    console.log(thaisCarla(tipo));
} 
else if (IMC >= 35 && IMC <40){
    let hora = "obesidade 2"
    console.log(thaisCarla(tipo));
} 
else if (IMC > 40){
    let tipo = "obesidade 3"
    console.log(thaisCarla(tipo));
} 
else {
    console.log("Alguma informação inválida!");
}
