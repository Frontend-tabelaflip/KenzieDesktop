// EXERCÍCIO 1
// OPÇÃO 1
/*
*/
function fibonacciNumbers(valor) {
    let anterior = 0; // valor anterior do contador
    let atual = 1; // valor atual do contador
    let proximo; // valor seguinte do contador
    let resultado;

    // console.log(anterior); // exibe o primeiro termo da sequência
    // console.log(atual); // exibe o segundo termo da sequência

    for (let i = 1; i <= valor; i++) {
        resultado = anterior;
        console.log(resultado);

        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
}

fibonacciNumbers(15);


// OPÇÃO 2

// function fibonacciNumbers(valor) {
//     let anterior = 0;
//     let atual = 1;
//     let proximo;
//     let fibonacciString = `${anterior}, ${atual}`; // inicializa a string com os dois primeiros termos

//     for (let i = 3; i <= valor; i++) {
//       proximo = anterior + atual;
//       fibonacciString += `, ${proximo}`; // adiciona o próximo termo à string
//       anterior = atual;
//       atual = proximo;
//     }

//     console.log(fibonacciString);
//   }

//   fibonacciNumbers(15);

// EXERCÍCIO 2
/* 
- 
*/

function grainsChess(valor) {
    let numSquares = valor;
    let grainTotal = 0;
    let grainSquare = 1;

    for (i = 1; i <= numSquares; i++) {
        grainTotal += grainSquare;
        grainSquare *= 2;
    }
    return grainTotal
}

// console.log(grainsChess(64));
