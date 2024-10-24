/*Apresentação
const nome = "Pedro"
let idade = "28"
console.log('Olá, meu nome é Pedro e tenho 28 anos');

//Qual seu bairro e onde ele fica
const bairro = "Pina"
const cidade = "Recife"
console.log('Pina e fica em Recife');

//Calculos de variareis
const numero1 = 20;
const numero2 = 10;
let soma = 10 + 20;
let subtração = 20 - 10;
let multiplicação = 10 * 20;
let divisão = 20 / 10;

console.log(soma);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);

//Calculo de Aréa
const base = "8";
const altura = "5";
const area = base * altura / 2;
console.log(`A aréa do triângulo é ${area}`);

//Calculo de Média
const nota1 = "7";
const nota2 = "5";
const nota3 = "9";
const media = (7 + 5 + 9) / 3;
console.log(`O resultado da média é ${media}`);

//Desconto
var valor = (100);
var percentualdesconto = (20);
var valorfinal = valorfinal = valor - ( valor * (percentualdesconto / 100));
console.log(`O valor total do produto com desconto é de ${valorfinal}$`);

//Imposto de renda
let salarioBruto = 5000; // Salario

let imposto; // Calculo do imposto de renda

// Definindo as alíquotas baseado no dia de hoje
if (salarioBruto <= 2000) {
    imposto = 0; // Isento
} else if (salarioBruto <= 5000) {
    imposto = salarioBruto * 0.15; // Se fo 15% maior
} else {
    imposto = salarioBruto * 0.25; // Se for 25% maior
}

console.log("O imposto de renda a ser pago é: R$ " + imposto.toFixed(2));


//Conversor de moedas
function converterMoeda(valor, taxaCambio){
const valorConvertido = valor * taxaCambio;
return (`R$ ${valor} é equivalente a $ ${valorConvertido.toFixed(2)}.`);
}
const valorEmReais = 100; // Valor em Reais
const taxaCambio = 0.20; // Taxa de câmbio (1 REAL = 0.20 DOLAR AMERICANO)
const resultado = converterMoeda(valorEmReais, taxaCambio);
console.log(resultado);

//Conversor de Celcius para Fahrenheit
var temperaturaCelsius = 25; // Variável para a temperatura em Celsius que esta 25°
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32; // Conversão para Fahrenheit
console.log(`${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(2)}°F.`);

//Calculadora de IMC
var peso = 70; // Peso em kg
var alt = 1.75; // Altura em metros
var imc = peso / (alt * alt); // Cálculo do IMC
console.log("O IMC é: " + imc.toFixed(2));

console.log ("FIM !!!");/*/