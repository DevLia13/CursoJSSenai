/* Atividade 1 */

let num = prompt("Digite um número: ")

if (num < 0){
    console.log("número negativo");
}
else if (num > 0){
    console.log("Número positivo");
}
else {
    console.log("numero é == 0")
}

/* Atividade 2 */

let idade = prompt("Digite sua idade: ")

if (idade > 18){
    console.log("Você pode votar");
}
else if (idade< 18){
    console.log("Você Não Pode votar");
}

/* Atividade 3 */

let parouimpar= prompt("Digite seu número: ")

if (parouimpar % 2 === 0){
    console.log("Par");
}
else if (parouimpar % 2 != 0){
    console.log("Impar");
}

/* Atividade 4 */

let ladoA= prompt("Digite seu número: ")
let ladoB= prompt("Digite seu número: ")
let ladoC= prompt("Digite seu número: ")

if (ladoA != ladoB && ladoB != ladoC ){
    console.log("Triangulo escaleno");
}
else if (ladoA === ladoB && ladoB === ladoC ){
    console.log("Triangulo Isosceles");
}
else{
    console.log("Triangulo Equilatero")
}

/* Atividade 5 (numero % 5 === 0) && (numero % 7 === 0).*/

let mutiplo= prompt("Digite seu número: ")

if ((mutiplo % 5 === 0) && (mutiplo % 7 === 0)){
    console.log("Mutiplo de 5 e 7 simultaneamente");
}
else if ((mutiplo % 5 === 0) && (mutiplo % 7 != 0)){
    console.log("Mutiplo de 5 porém não mutiplo de 7");
}
else if ((mutiplo % 5 != 0) && (mutiplo % 7 === 0)){
    console.log("Mutiplo de 7 porém não mutiplo de 5");
}
else{
    console.log("Não é mutiplo de 5 nem de 7")
}
/* Atividade 6 */

let numeroo= prompt("Digite seu número: ")

if (numeroo > 0 && numeroo >15 ){
    console.log("Positivo e maior que 15");
}
else if (numeroo > 0 && numeroo < 15){
    console.log("Positivo e menor que 15");
} else {
    console.log("Negativo e menor que 15")
}

/* Atividade 7  if ((divisivel % 9 === 0) && (divisiel % 6 === 0)) */

let divisivel= prompt("Digite seu número: ")

if ((divisivel % 9 === 0) && (divisivel % 6 === 0)){
    console.log("Divisivel por 9 e 6 simultaneamente");
}
else if ((divisivel % 9 === 0) && (divisivel % 6 != 0)){
    console.log("Divisivel por 9 porém não Divisivel por 6");
}
else if ((divisivel % 9 != 0) && (divisivel % 6 === 0)){
    console.log("Divisivel por 6 porém não Divisivel de 9");
}
else{
    console.log("Não é divisivel por 9 nem de 6")
}

   



