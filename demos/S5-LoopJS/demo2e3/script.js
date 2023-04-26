const myName = 'Olá Kenzie!';

//ACESSANDO UM CARACTERE ESPECÍFICO
// console.log(myName[5]);

//PRINTANDO OS CARACTERES
for (let i = 0; i < myName.length; i++) {
    //     console.log(myName[i]);
}

//PRINTANDO OS CARACTERES INVERTIDOS
for (let i = myName.length; i >= 0; i--) {
    // console.log(myName[i]);
}

/* Escreva uma função que receba uma string e uma letra, e procure a letra na string e a torna maiúscula se encontrada.


Retorne essa string.
[x] - Iterar (rodar um loop em cima de algo) sobre a string e achar a letra procurada
[x] - acahar a letra procurada
[x] - trocar para maiúsculo
     - Não consigo alterar a letra da string diretamente
     
     function upperCaseLetter(string, letterToUpperCase) {
         let modifiedString = '';
         for (let i = 0; i < string.length; i++) {
             if (string[i] === letterToUpperCase) {
                 modifiedString += string[i].toUpperCase();
                } else {
                    modifiedString += string[i];
                }
            }
            return modifiedString;
        }
        
        const str = 'casa';
        const upperCaseLetterResult = upperCaseLetter(str, 'a');
        console.log('->', upperCaseLetterResult);
*/

/* Receber uma string, verificar se é um palíndromo ou não
        retornar true caso sim, false caso não
        - inverter a string
        - comparar com a string original
        - comparar frases
        - alguns espaços não ficam posicionados corretamente
            - resolve-se removendo os espaçoes tanto da original quanto da invertida
        - não diferenciar maiúsculas de minúsculas
        - retornar true || false
*/
function removeSpace(string) {
    let modifiedString = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            modifiedString += string[i];
        }
    }
    return modifiedString;
}


function inverted(string) {
    let invertedString = "";

    for (let i = 0; i < string.length; i++) {
        invertedString = string[i] + invertedString;
    }
    return invertedString;
}
// console.log(inverted('anotaram a data da maratona'))


function isPalindrome(string) {
    let stringWithoutSpace = removeSpace(string);
    let invertedWithoutSpace = removeSpace(inverted(string));

    stringWithoutSpace = stringWithoutSpace.toLowerCase();
    invertedWithoutSpace = invertedWithoutSpace.toLowerCase();
    // console.log(stringWithoutSpace);
    // console.log(invertedWithoutSpace);
    if (stringWithoutSpace === invertedWithoutSpace) {
        return true;
    }
    return false;
}

// const string = 'Anotaram a data da maratona';
// const isPalindromeResult = isPalindrome(string);
// console.log(isPalindromeResult); 

function nestedForExample() {
    for (let i = 0; i < 5; i++) {
        console.log("i =", i);
        for (let j = 0; j < 4; j++) {
            console.log("j =", j);
        }
    }
}

// nestedForExample();

//EXERCICIO PIRAMIDE

function piramideNumerica(tamanhoPiramide) {
    for (let i = 1; i <= tamanhoPiramide; i++) {
        let linha = '';
        // console.log(i);

        for (let j = 1; j <= i; j++) {
            // console.log("j", j);
            linha += j + ' ';
        }
        console.log(linha);
    }
}


piramideNumerica(5);