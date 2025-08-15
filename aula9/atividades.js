//  Atividade 1: Função de Saudação Personalizada
//  Crie uma função chamada saudacao que recebe um nome e um horário
//  (manhã, tarde ou noite) e retorna uma saudação apropriada. Utilize parametros.

function saudacao(nome, horario, hora) {
    const mensagem = `Olá, ${nome}! Boa ${hora}!`;
  return mensagem;
 
}


var nome = prompt("Digite seu nome: ");
var horario = Number(prompt("Digite o horário:" ));

if (horario >= 04 && horario < 12 ) {
    let hora = "Dia"
    console.log(saudacao(nome, horario, hora));
} 
else if (horario >= 13 && horario < 17){
    let hora = "tarde"
    console.log(saudacao(nome, horario, hora));   
} 
else if (horario >= 17 && horario < 23){
    let hora = "noite"
    console.log(saudacao(nome, horario, hora));
} 
else if (horario < 04){
    let hora = "noite"
    console.log(saudacao(nome, horario, hora));
} 
else {
    console.log("Horário inválido!");
}


//ou... 

function saudacao(nome, horario, hora) {
    const mensagem = `Olá, ${nome}! Boa ${hora}!`;
  return mensagem;
 
}


var nome = prompt("Digite seu nome: ");
var horario = prompt("Digite o horário:" );

if (horario == "manhã" ) {
    let hora = "Dia"
    console.log(saudacao(nome, horario, hora));
} 
else if (horario === "tarde"){
    let hora = "tarde"
    console.log(saudacao(nome, horario, hora));   
} 
else if (horario === "noite"){
    let hora = "noite"
    console.log(saudacao(nome, horario, hora));
} 

else {
    console.log("Horário inválido!");
}

//  Atividade 2: Calculadora Simples
//  Crie uma função calculadora que recebe dois números e uma operação 
// ('soma', 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado.
function somar(a, b) {
  return a + b;
}

function subtrair(d, e) {
  return d - e;
} 

const multiplicar = function(f, g) {
  return f * g;
};

const dividir = function(h, i){
    return h / i
}

var opcao = prompt("Digite sua opção: ")

if (opcao === "1") {
    let a = parseInt(prompt("Digite o nome o primeiro numero para somar:"));
    let b = parseInt(prompt("Digite o nome o segundo numero para somar:"));
    console.log(somar(a,b));
} 
else if (opcao === "2") {
    let d = parseInt(prompt("Digite o nome o primeiro numero para subtrair:"));
    let e = parseInt(prompt("Digite o nome o segundo numero para subtrair:"));
    console.log(subtrair(d,e));
  
} 
else if (opcao === "3") {
    let f = parseInt(prompt("Digite o nome o primeiro numero para mutiplicar:"));
    let g = parseInt(prompt("Digite o nome o segundo numero para mutiplicar:"));
    console.log(multiplicar(f,g));
  
   
} 
else if (opcao === "4") {
    let h = parseInt(prompt("Digite o nome o primeiro numero para dividir:"));
    let i =  parseInt(prompt("Digite o nome o segundo numero para dividir:"));
    console.log(dividir(h,i));
  
    
} 
else {
    console.log("Opção inválida! Escolha de 1 a 4.");
}




//  Atividade 3: Validador de Senha -  Utilize variáveis globais.
//  Crie uma função validarSenha que verifica se uma senha tem pelo menos 8 
// caracteres, contém pelo menos um número e uma letra maiúscula.

        function validar() {
            const senha = document.getElementById("senha").value;
            const resultado = document.getElementById("resultado");

            // Verificando os critérios
            if (senha.length >= 8 && /\d/.test(senha) && /[A-Z]/.test(senha)) {
                resultado.textContent = "Senha válida!";
                resultado.className = "valid";
            } else {
                resultado.textContent = "Senha inválida! Deve conter 8 caracteres, um número e uma maiúscula.";
                resultado.className = "invalid";
            }
        }

//  Atividade 4: Gerador de Tabuada utilize variáveis locais. 
//  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.

function tabuada(mutiplicador){
 for (num=0;num<=10;num++){
    calculo = num * mutiplicadorconsole.log(n, "x", mutiplicador, "=", calculo)
 }
}




// Atividade 5: CRie uma calculadora de IMC, utilize parâmetros
//1 -  O usuario precisa digitar o peso e a idade
//2 -  O sistema precisa fazer o calculo
//3 -  Precisa mostrar ao usuário a saída de acordo com o calculo
//Obesidade 1, peso normal, desnutrição, obesidade 2, obedidade 3. 

function thaisCarla(nome, tipo) {
  const mensagem = `Olá, ${nome}! você esta ${tipo}!`;
  return mensagem;
}

var nome = prompt("Digite seu nome: ");
var peso = parseFloat(prompt("Digite o seu peso:" ));
var altura = parseFloat(prompt("Digite o sua altura:" ));

var IMC = calcularImc(peso, altura)

if (IMC < 18.5 ) {
    let tipo = "desnutrido"
    console.log(thaisCarla(nome,tipo));
} 
else if (IMC >= 18.5 && IMC <24.9){
    let tipo = "no peso normal"
    console.log(thaisCarla(nome,tipo));
} 
else if (IMC >= 25 && IMC < 35 ){
    let tipo = "com obesidade 1"
    console.log(thaisCarla(nome,tipo));
} 
else if (IMC >= 35 && IMC <40){
    let hora = "obesidade 2"
    console.log(thaisCarla(nome,tipo));
} 
else if (IMC > 40){
    let tipo = "obesidade 3"
    console.log(thaisCarla(nome,tipo));
} 
else {
    console.log("Alguma informação inválida!");
}
