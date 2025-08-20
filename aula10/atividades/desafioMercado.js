class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
    console.log(`Produto "${produto.nome}" adicionado ao carrinho.`);
  }

  removerProduto(nome) {
    const index = this.produtos.findIndex(prod => prod.nome === nome);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log(`Produto "${nome}" removido do carrinho.`);
    } else {
      console.log(`Produto "${nome}" não encontrado no carrinho.`);
    }
  }

  mostrarCarrinho() {
    if (this.produtos.length === 0) {
      console.log("Carrinho vazio.");
    } else {
      console.log("Produtos no carrinho:");
      this.produtos.forEach(prod => {
        console.log(`- ${prod.nome}: R$ ${prod.preco.toFixed(2)}`);
      });
    }
  }

  calcularTotal() {
    const total = this.produtos.reduce((acc, prod) => acc + prod.preco, 0);
    console.log(`Total: R$ ${total.toFixed(2)}`);
    return total;
  }
}

// testando:
const p1 = new Produto("Camisa", 79.90);
const p2 = new Produto("Calça", 129.90);
const p3 = new Produto("Tênis", 199.90);

const meuCarrinho = new Carrinho();
meuCarrinho.adicionarProduto(p1);
meuCarrinho.adicionarProduto(p2);
meuCarrinho.adicionarProduto(p3);

meuCarrinho.mostrarCarrinho();
meuCarrinho.calcularTotal();

meuCarrinho.removerProduto("Calça");
meuCarrinho.mostrarCarrinho();
meuCarrinho.calcularTotal();
