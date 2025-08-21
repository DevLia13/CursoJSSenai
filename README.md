Desemvolvimeno em JS - Senai 

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Jogo de Adivinhação</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      text-align: center;
      width: 320px;
    }
    h1 {
      margin-bottom: 20px;
      color: #333;
    }
    input {
      padding: 10px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 8px;
    }
    button {
      margin-top: 15px;
      padding: 10px 20px;
      background: #4facfe;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background: #00c6ff;
    }
    #resultado {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #444;
    }
    #reiniciar {
      display: none; /* escondido até acabar o jogo */
      margin-top: 15px;
      background: #28a745;
    }
    #reiniciar:hover {
      background: #218838;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Adivinhe o Número!</h1>
    <p>Escolha o número máximo de tentativas:</p>
    <input type="number" id="maxTentativas" min="1" placeholder="Ex: 5">
    <br>
    <p>Digite um número entre 1 e 100:</p>
    <input type="number" id="palpite" min="1" max="100">
    <button onclick="verificar()">Chutar</button>
    <p id="resultado"></p>
    <p id="tentativas"></p>
    <button id="reiniciar" onclick="reiniciarJogo()">Reiniciar Jogo</button>
  </div>

  <script>
    let numeroSecreto = gerarNumero();
    let tentativas = 0;
    let maxTentativas = 0;
    let jogoAtivo = true;

    function gerarNumero() {
      return Math.floor(Math.random() * 100) + 1;
    }

    function verificar() {
      if (!jogoAtivo) return;

      const palpite = Number(document.getElementById("palpite").value);
      const resultado = document.getElementById("resultado");
      const tentativasTexto = document.getElementById("tentativas");
      const botaoReiniciar = document.getElementById("reiniciar");

      if (!palpite) {
        resultado.textContent = "Digite um número válido!";
        resultado.style.color = "orange";
        return;
      }

      // Define o máximo de tentativas se ainda não foi definido
      if (maxTentativas === 0) {
        maxTentativas = Number(document.getElementById("maxTentativas").value);
        if (!maxTentativas || maxTentativas < 1) {
          resultado.textContent = "Defina um número máximo de tentativas válido!";
          resultado.style.color = "orange";
          return;
        }
      }

      tentativas++;

      if (palpite === numeroSecreto) {
        resultado.textContent = "🎉 Acertou!";
        resultado.style.color = "green";
        jogoAtivo = false;
        botaoReiniciar.style.display = "inline-block";
      } else if (palpite < numeroSecreto) {
        resultado.textContent = "🔼 Número maior!";
        resultado.style.color = "blue";
      } else {
        resultado.textContent = "🔽 Número menor!";
        resultado.style.color = "red";
      }

      tentativasTexto.textContent = `Tentativas: ${tentativas}/${maxTentativas}`;

      if (tentativas >= maxTentativas && jogoAtivo) {
        resultado.textContent = `💀 Game Over! O número era ${numeroSecreto}`;
        resultado.style.color = "red";
        jogoAtivo = false;
        botaoReiniciar.style.display = "inline-block";
      }
    }

    function reiniciarJogo() {
      numeroSecreto = gerarNumero();
      tentativas = 0;
      maxTentativas = 0;
      jogoAtivo = true;
      document.getElementById("palpite").value = "";
      document.getElementById("maxTentativas").value = "";
      document.getElementById("resultado").textContent = "";
      document.getElementById("tentativas").textContent = "";
      document.getElementById("reiniciar").style.display = "none";
    }
  </script>
</body>
</html>
