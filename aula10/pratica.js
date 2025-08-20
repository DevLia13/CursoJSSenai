// class Pessoa{
// constructor(){
// this.nome = "paula";
        // this.ano_nascimento = 2000;
        // this.endereco = 'rua andres, 27'
        // this.curso = "JS"
        // this.peso = 63;
        // this.altura = 1.67


//    }

//    displayname(){
//        console.log(this.nome)
//    }

//    calcular_idade(){
//        let ano_atual = parseInt(prompt("digite o ano atual:"))
//        let calculo = ano_atual - ano_nascimento
//        console.group("idade: ", calculo)
//    }

//    imc(){
//        let novo_imc = this.peso/this.altura ** 2
//        console.log("IMC:  ", novo_imc)
//    }

//}

// outra_pessoa = new Pessoa()

// outra_pessoa.displayname()
// outra_pessoa.calcular_idade()
// outra_pessoa.imc()

//obs: o codigo a cima não temparametros logos todos filhos herdados da classe pessoa serão "paula"









class Pessoa{
     constructor(nome, ano_nascimento, endereco, curso,peso, altura){ // auxiliador da class
      this.nome = nome;
	  this.ano_nascimento = ano_nascimento;
	  this.endereco = endereco
      this.curso = curso;
	  this.peso = peso;
	  this.altura = altura;
	}
   
   displayName(){
   console.log(this.nome)

   }

   calcular_Idade(){
	let ano_atual = parseInt(prompt('Digite o ano atual:  '))
	let calculo =  ano_atual - this.ano_nascimento
	console.log('Idade:  ',  calculo)
   }

   imc(){
	let novo_imc;
    novo_imc = this.peso/(this.altura ** 2)
	console.log(`IMC da ${this.nome} -> ${novo_imc.toFixed()}`) 

   }

}


// filho da classe 1
outra_pessoa = new Pessoa('Carlos', 1980, 'Rua 70', 'Python', 80,2.00,)

// filho da classe 2
segunda_pessoa = new Pessoa('Maria', 2000, 'Rua 150, centro', 'Java', 65,1.71)

// filho da classe 3
terceira_pessoa = new Pessoa('Fernando', 1960, 'Rua Aruja, centro', 'Golang', 90,1.71)


segunda_pessoa.displayName()
outra_pessoa.displayName()
terceira_pessoa.displayName()

segunda_pessoa.calcular_Idade()
outra_pessoa.calcular_Idade()
terceira_pessoa.calcular_Idade()

segunda_pessoa.imc()
outra_pessoa.imc()
terceira_pessoa.imc()


//pratica 2

class Calculadora{
    
      somar(a,b){
      return a + b


      }
        subtrair(a,b){
       return a - b


      }


        dividir(a,b){


            return a / b
      


      }


        multiplicar(a, b){
        return a * b     
 
      }




}



c = new Calculadora()


console.log(c.somar(20,30))
console.log(c.dividir(20,30).toFixed())
console.log(c.multiplicar(20,30))
console.log(c.subtrair(20,30))
















class Calculadora{
    constructor(n1,n2){
        this.num1= n1;
        this.num2 = n2;
    }
    
      somar(){
        let calculo = this.num1 + this.num2
        console.log(calculo)

      }
        subtrair(){
        let calculo = this.num1 - this.num2
        console.log(calculo)

      }

        dividir(){


        let calculo = this.num1 / this.num2
        console.log(calculo)

      }

        multiplicar(){
        let calculo = this.num1 * this.num2
        console.log(calculo)  
 
      }


}


let n1 = parseFloat(prompt("digite um numero: "))
let n2 = parseFloat(prompt("digite um numero: "))

c = new Calculadora(n1, n2)

console.log(c.somar())
console.log(c.dividir.toFixed())
console.log(c.multiplicar())
console.log(c.subtrair())




