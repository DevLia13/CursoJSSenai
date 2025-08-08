let aba = parseInt(10)//parseInt, ou parseFloat é o tipo  da variavel


let array = []

let valores = [1,2,3,4,5,6,8]

const teste= new Array(1,2,3)//array como lista no python usando ()

const mista = [10,2,3,{teste:20},[1,2,3]]//semi-matriz por assim dizer

const bidimensional = [[1,2,3],[4,5,6][7,8,9]]


//exibir valores
console.log(valores)

console.log(mista[mista.length - 2])//serve para ver o array de trás para fremte

array = [1,2,3,4]

array.push(34)//push adiciona valores no final
array.pop()//pop remove ultimo valor
array.shift()//shift remove p inicio
array.unshift()//adiciona elemento no inicio


//Laços de repetição

for(let a = 0; a<10; a++){
    console.log(a)
}

// laços de repetição com condicionais
let a = 0
let nome = 'lia'
if (a <= 10 && nome === 'lia'){
    
  for(let a = 0; a<=10 ; a++){
    console.log('adicionando mais um numero, bobão')
    console.log(a)
}
}


let lista = [1,2,3,4,5,6,7,8,9]

a.sort()//ordenando lista

console.log(a)

//concatenação
let ar = [1,2,3]
let ar2 =[4,5,6]

let ar3 = ar + ar2

