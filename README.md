Desemvolvimeno em JS - Senai 

atividade 1

let soma = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número (0 para parar):"));
    soma += numero;
} while (numero !== 0);

console.log("A soma total é: " + soma);

atividade 2

let frutas = ["maçã", "banana", "laranja", "uva"];

let i = 0;
while (i < frutas.length) {
    console.log(frutas[i]);
    i++;
}

desafio 

let listaCompras = [];
let opcao;

while (true) {
    opcao = prompt(
        "Escolha uma opção:\n1 - Adicionar item\n2 - Remover item\n3 - Listar itens\n4 - Sair"
    );

    if (opcao === "1") {
        let item = prompt("Digite o nome do item para adicionar:");
        listaCompras.push(item);
        console.log(item + " foi adicionado à lista.");
    } 
    else if (opcao === "2") {
        let itemRemover = prompt("Digite o nome do item para remover:");
        let index = listaCompras.indexOf(itemRemover);
        if (index !== -1) {
            listaCompras.splice(index, 1);
            console.log(itemRemover + " foi removido da lista.");
        } else {
            console.log("Item não encontrado!");
        }
    } 
    else if (opcao === "3") {
        console.log("📜 Lista de compras:");
        if (listaCompras.length === 0) {
            console.log("Lista vazia.");
        } else {
            for (let i = 0; i < listaCompras.length; i++) {
                console.log((i + 1) + " - " + listaCompras[i]);
            }
        }
    } 
    else if (opcao === "4") {
        console.log("Programa encerrado.");
        break;
    } 
    else {
        console.log("Opção inválida! Escolha de 1 a 4.");
    }
}

