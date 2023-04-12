
/* Calculadora de IMC
alert('Calculadora de IMC');
let peso = parseInt(prompt('Digite o seu peso'));
let altura = parseFloat(prompt('Digite a sua altura'));

let imc = peso / (altura * altura);

// alert(`Seu IMC é: ${imc.toFixed(2)}`);

if(imc < 18.5){
    alert(`Seu IMC é: ${imc.toFixed(2)} e você está abaixo do seu peso ideal.`)
}else if(imc <= 24.9){
    alert(`Seu IMC é: ${imc.toFixed(2)} e você está no seu peso ideal.`)
}else if(imc <= 29.9){
    alert(`Seu IMC é: ${imc.toFixed(2)} e você está com sobrepeso.`)
}else{
    alert(`Seu IMC é: ${imc.toFixed(2)} e você está com obesidade.`)
}
*/

/* Tabela IMC
IMC <18,5kg/m2 (baixo peso); 
IMC >18,5 até 24,9kg/m2 (eutrofia); 
IMC ≥25 até 29,9kg/m2 (sobrepeso);
IMC >30,0kg/m2 (obesidade)
*/

/* Nome e senha
*/
let nome = prompt('Digite seu nome');
let lowercase_nome = nome.toLowerCase();

if(lowercase_nome == 'julian'){
    let senha = prompt('Digite a senha');
    if(senha == '1234'){
        alert('Usuário autenticado');
    }else{
        alert('Senha está incorreta');
    }
}else{
    alert('Usuário não cadastrado');
}

/* Escopo de Variável */

/*
let global = 'variável global'

if(true){
    let local = "variável local";
    console.log(local);
}
console.log(global);
*/