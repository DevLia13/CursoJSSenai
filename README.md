Desemvolvimeno em JS - Senai 

function saudacao(nome, horario, hora) {
    const mensagem = 'Olá, ${nome}! Boa ${hora}!';
  return mensagem;
 
}


var nome = prompt("Digite seu nome: ")
var horario = prompt("Digite o horário:" )

if (horario > 04 && horario < 12 ) {
    let hora = "Dia"
    console.log(saudacao(mensagem));
} 
else if horario >13 && horario < 17{
    let hora = "tarde"
    console.log(saudacao(mensagem));   
} 
else if horario >17 && horario < 23{
    let hora = "noite"
    console.log(saudacao(mensagem));
} 
else if horario < 04{
    let hora = "noite"
    console.log(saudacao(mensagem));
} 
else {
    console.log("Horário inválido!");
}
