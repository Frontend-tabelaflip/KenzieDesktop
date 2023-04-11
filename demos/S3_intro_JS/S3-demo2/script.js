alert('Calculadora de IMC');
let peso = parseInt(prompt('Digite o seu peso'));
let altura = parseFloat(prompt('Digite a sua altura'));

let imc = peso / (altura * altura);

alert(`Seu IMC é: ${imc.toFixed(2)}`);