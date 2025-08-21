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

//codigo da prof:

class Salario{
      constructor(carga, salario){
       this.carga = carga;
       this.salario = salario;      

      }
     
      hora_colaborador(){
      let cal = this.salario / this.carga
      return cal 
      }

      extra_colaborador(ho_colab){
      let cal =  ho_colab * 1.5
      return cal
      }
      
    quant_extra(quantidade, ho_colab){
       return quantidade * ho_colab   
    }
    
    salario_total(salario, quant_extra){

        return salario +  quant_extra

    }

}

let salario   =  new Salario(220,2000)
let hora_colaborador = salario.hora_colaborador()
console.log('Valor hora R$', salario.hora_colaborador())
console.log('Extra R$', salario.extra_colaborador(hora_colaborador))
let quantidade_h =  10
console.log('Quantidade de hora extra', quantidade_h)
let extra  =  salario.extra_colaborador(hora_colaborador)
console.log('Valor extra R$', salario.quant_extra(quantidade_h,extra))
let _extra_t = salario.quant_extra(quantidade_h,extra)
console.log('Total Salario R$', salario.salario_total(2000,_extra_t))
