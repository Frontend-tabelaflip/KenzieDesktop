/* Exercício 1
let usarname = prompt('Digite seu username:');  //Gabriel
let password = prompt('Digite sua senha:');     //9876

if(usarname == 'Gabriel' && password == '9876'){
    alert(`Seja bem vindo ${usarname}`)
}else{
    alert(`O nome ${usarname}`)
}
*/

/* Exercício 2
let valorRandomizado = parseInt((Math.random() * 6) + 1);
console.log(valorRandomizado);

let sugestao = parseInt(prompt('Teste sua sorte, digite um número de 1 a 6'));
console.log(sugestao);

if(valorRandomizado == sugestao){
    alert(`Parabéns, você acertou! O número do dado foi ${valorRandomizado}`);
}else{
    alert(`Não foi dessa vez! Você digitou ${sugestao} mas o dado parou na posição ${valorRandomizado}`)
}
*/

/* Exercício 3
*/

let username = prompt('Digite seu username');

if(username == 'Gabriel'){
    alert(`O nome ${username} já está sendo utilizado!`)
}else{
    let pass = prompt('Digite a sua senha')
    if(pass.length < 8){
        alert(`SENHA FRACA: A senha possui menos de oito caracteres.`)
    }else{
        alert('Cadastro efeturado com sucesso.');
    }
}