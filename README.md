Desemvolvimeno em JS - Senai 

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Reserva de Mesas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      padding: 30px;
    }
    h1 {
      color: #333;
    }
    label {
      display: block;
      margin-top: 15px;
    }
    input, select, button {
      padding: 8px;
      margin-top: 5px;
      width: 100%;
      max-width: 400px;
    }
    #resultado {
      margin-top: 20px;
      font-weight: bold;
      color: green;
    }
  </style>
</head>
<body>
  <h1>Reserva de Mesas</h1>

  <p><strong>Opções:</strong></p>
  <ul>
    <li>Mesa comum (4 pessoas) – R$ 50 por pessoa</li>
    <li>Mesa espaçosa (6 pessoas) – R$ 80 por pessoa</li>
    <li>Varanda vista externa (4 pessoas) – R$ 100 por pessoa</li>
  </ul>

  <label for="nome">Nome:</label>
  <input type="text" id="nome" placeholder="Digite seu nome">

  <label for="mesa">Tipo de mesa:</label>
  <select id="mesa">
    <option value="">Selecione</option>
    <option value="mesa comum">Mesa Comum</option>
    <option value="mesa espaçosa">Mesa Espaçosa</option>
    <option value="varanda vista externa">Varanda Vista Externa</option>
  </select>

  <label for="pessoas">Número de pessoas:</label>
  <input type="number" id="pessoas" placeholder="Digite o número de pessoas">

  <button onclick="calcularReserva()">Calcular Reserva</button>

  <div id="resultado"></div>

  <script>
    function calcularReserva() {
      const nome = document.getElementById('nome').value.trim();
      const mesa = document.getElementById('mesa').value;
      const numeroDePessoas = Number(document.getElementById('pessoas').value);
      const resultado = document.getElementById('resultado');

      let consumoMinimo;
      let capacidadeMaxima;

      switch (mesa) {
        case "mesa comum":
          consumoMinimo = 50;
          capacidadeMaxima = 4;
          break;
        case "mesa espaçosa":
          consumoMinimo = 80;
          capacidadeMaxima = 6;
          break;
        case "varanda vista externa":
          consumoMinimo = 100;
          capacidadeMaxima = 4;
          break;
        default:
          resultado.textContent = "Erro: selecione um tipo de mesa válido.";
          resultado.style.color = "red";
          return;
      }

      if (!nome || numeroDePessoas <= 0 || isNaN(numeroDePessoas)) {
        resultado.textContent = "Preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
      }

      if (numeroDePessoas > capacidadeMaxima) {
        resultado.textContent = `Essa mesa suporta no máximo ${capacidadeMaxima} pessoas.`;
        resultado.style.color = "red";
        return;
      }

      const valorTotal = consumoMinimo * numeroDePessoas;
      resultado.textContent = `Olá, ${nome}. Valor total da reserva: R$ ${valorTotal.toFixed(2)}`;
      resultado.style.color = "green";
    }
  </script>
</body>
</html>
