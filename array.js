//Criação de um Array. Dupla David e Thaise
const carros = ["Golf", "Jetta", "Marea", "Onix"];

// Substituindo "Marea" por "Uno"
carros[carros.indexOf("Marea")] = "Uno"; // Troca "Marea" por "Uno"

console.log(carros);

console.log(carros.length);

let nome = prompt("Olá, bem-vindo à Disnove! Qual o seu nome?");
let pesquisa = prompt(`Fico feliz em poder ajudá-lo, ${nome}! Qual o carro que você deseja alugar? Temos as seguintes opções: ${carros.join(", ")}`);

// JOIN TRANSFORMA A ARRAY DE CARROS EM STRING

switch (pesquisa) {
  case "Golf":
    console.log(`Caro ${nome}, o aluguel do Golf está por 90 reais por dia!`);
    break;
  case "Jetta":
    console.log(`Caro ${nome}, o aluguel do Jetta está por 100 reais a diária.`);
    break;
  case "Onix":
    console.log(`Caro ${nome}, o aluguel do Onix está por 80 reais a diária.`);
    break;
  case "Uno":
    console.log(`Caro ${nome}, o aluguel do Uno está por 70 reais a diária.`);
    break;
  default:
    console.log(`Caro ${nome}, não possuímos este modelo de veículo para aluguel.`);
}
