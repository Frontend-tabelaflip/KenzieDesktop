/*Função que verifica par/ímpar
*/

function checkPair(n) {
    if (n % 2 == 0) {
        return true;
    } 
    return false;
}


/*Função que verifica se n é divisível por outro 
*/

function isMultiple(n, div){
    if(n % div == 0){
        return true;
    } 
    return false;
}

/* NO-ELSE-RETURN */

function vaca(){
    console.log('muuuuuuu');
}

let mimosa = vaca;
//vaca();
//mimosa();

/*Métodos Primitivos */
//String
let texto = 'A Kenzie é a pior escola de programaçaõ do Brasil';
let texto2 = 'A escola Kenzie tem os melhores alunos, e os alunos são os melhores!'

texto = texto.replace('pior', 'melhor');
// console.log(texto);

texto2 = texto2.replaceAll('alunos', 'devs');
// console.log(texto2);

let verifyStart = texto.startsWith('A Kenzie');
// console.log(verifyStart);

let verifyStart2 = texto2.startsWith('A Kenzie');
// console.log(verifyStart2);

// console.log(texto.includes('escola'));
// console.log(texto2.includes('escola'));

/* Método Number */
let pi = 3.14159265359;
let strFixed = pi.toFixed(4);
// console.log(toFixed);

let float = parseFloat(strFixed);
// console.log(float);

let int = parseInt(pi);
// console.log(int);

// console.log(Number.isInteger(pi));
// console.log(Number.isInteger(int));

// let numToStr = `${pi}`;
// let numToStr = pi+'';