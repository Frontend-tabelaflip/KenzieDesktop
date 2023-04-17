// function nomeDaFuncao(){

// }

/* let nome = prompt('Digite seu nome:');

function padronizaMensagem(){
    alert(`Seja bem vindo ${nome}`);
}

padronizaMensagem();
*/
//-----------------------

/* CALCULADORA
function calculadora(a,b,op) {
    if (op == '+') {
        return a + b;
    } else if (op == '-') {
        return a - b;
    } else if (op == '*') {
        return a * b;
    } else if (op == '/') {
        return a / b;
    } else {
        return 'Operador inválido';
    }

}

/* Calculadora prompt
let num1 = parseFloat(prompt('Digite o primeiro número'));
let num2 = parseFloat(prompt('Digite o segundo número'));
let operacao = prompt('Digite a operação a ser realizada');

let resultado = calculadora(num1, num2, operacao);
console.log(resultado);

console.log(calculadora(2, 5, '-'));

function soma(a, b){
    return a+b;
}

function subtrai(a, b){
    return a-b;
}

function calcula(a, b, op){
    if(op == '+'){
        return soma(a,b);
    }else if(op == '-'){
        return subtrai(a,b);
    }
}

console.log(calcula(12,6,'-'));
*/

/* CALCULADORA IMC
*/

let pesoUser = parseInt(prompt('Digite o seu peso'));
let alturaUser = parseFloat(prompt('Digite a sua altura'));

function calculaIMC(peso, altura){
    let imc = peso / (altura * altura)
    return imc.toFixed(2);  //ONDE COLOCAR O to.Fixed()
}

console.log(calculaIMC(pesoUser, alturaUser));