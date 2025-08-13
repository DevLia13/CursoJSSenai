//let ale = parseInt(Math.random()*10)


//Atividade 1; Crie um loop que mostre uma sequencia de números de 1 até 10
for (let i = 0; i < 11; i++) {
    console.log(`Número ${i}`);
}

//Atividade 2;

for (let i = 2; i < 11; i+=2) {
    console.log(`Número ${i}`);
}

//atividade 3
let a = 5
let b = 0

for (let i = 0; i <= 10; i++) {
    b = a * i
console.log(`Tabuada do 5\n ${i} x ${a} = ${b}`)
} 


//atividade 4

for (n=0;n<=5;n++){

    console.log('Abacaxi')
    
    }

//ou

const frutas = ["Maçã", "Banana", "Laranja"];

for (const fruta of frutas) {
console.log(fruta);
}//percorre a lista de frutas pelo indice

//atividade 5

let c = 1
let d = 0

for (let i = 0; i < 100; i++) {
    d = c + i
console.log(`Soma de ${i} + ${c} = ${d}`)
} 


//atividade 6
let z =11
do {
    z -=1;
    console.log(z)
}while(z>1);

//atividade 7

let alea = parseInt(Math.random()*10)
let x = 0
do {
     x = prompt("Digite seu chute: ");
}while(x != alea);

//atividade 8; Soma até digitar 0
let n1 = 0
let n2 = 0
let r = 0
do {
    let n1 = parseInt(prompt("Digite o n1: "));
    let n2 = parseInt(prompt("Digite o n2: "));
    r = n1 + n2
    console.log(`Soma de ${n1} + ${n2} = ${r}`)
}while(n1 || n2 != 0) ;


//atividade 9; Percorrendo array com while

let frutas = ["maçã", "banana", "laranja", "uva"];

let i = 0; while (i < frutas.length) { console.log(frutas[i]); i++; }

desafio

let listaCompras = []; let opcao;

while (true) { opcao = prompt( "Escolha uma opção:\n1 - Adicionar item\n2 - Remover item\n3 - Listar itens\n4 - Sair" );

