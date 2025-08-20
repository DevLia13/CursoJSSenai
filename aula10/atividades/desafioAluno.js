class Colaborador {
  constructor(nome, salarioMensal, horasMensais) {
    this.nome = nome;
    this.salarioMensal = salarioMensal;
    this.horasMensais = horasMensais;
  }

  calcularValorHora() {
    return this.salarioMensal / this.horasMensais;
  }

  calcularValorHoraExtra(percentual = 50) {
    const valorHora = this.calcularValorHora();
    return valorHora + (valorHora * percentual / 100);
  }

  calcularSalarioComHorasExtras(horasExtras, percentual = 50) {
    const valorHoraExtra = this.calcularValorHoraExtra(percentual);
    const totalExtras = horasExtras * valorHoraExtra;
    return this.salarioMensal + totalExtras;
  }
}

// testando:
const colaborador = new Colaborador("João", 3000, 160);
console.log("Valor da hora:", colaborador.calcularValorHora().toFixed(2));
console.log("Valor da hora extra (50%):", colaborador.calcularValorHoraExtra().toFixed(2));
console.log("Salário com 10 horas extras:", colaborador.calcularSalarioComHorasExtras(10).toFixed(2));
