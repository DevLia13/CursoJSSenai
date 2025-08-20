import  {Calculadora} from "./Calculadora.js";
import  {form} from "./formulario.js";

let c;
let d;
d = new form("a",25, "rua x", "email@gmail.com")
c = new Calculadora(10,20)
c.somar()
d.display()