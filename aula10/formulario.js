class form {
    constructor(nome, idade, endereco, email){
        this.nome - nome;
        this.idade = idade;
        this.endereco = endereco;
        this.email = email;
    }

    done(){
        if (this.name && this.idade && yhis.endereco && this.email){
            console.log("cadastro finalizado")
        }

    }

    display(){
            console.log("nome: ", this.name, "idade: ", this.idade, "endereço: ", this.endereco, "email: ", this.email )
        }
}