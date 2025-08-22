function calcularRankeadas(vitorias, derrotas) {
  // Calcula o saldo
  let saldo = vitorias - derrotas;

  // Define o nível
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Mostra a mensagem final
  console.log("O Herói tem de saldo de " + saldo + " está no nível de " + nivel);
}

// Teste da função
calcularRankeadas(60, 20); 