/* While 

 while (condição) {
    Bloco de código
}
// Inicializador
let i = 1;

// Condição de parada i <= 5
while (i <= 5){
    console.log(i);
    // i = i + 1 -> += 1
    i++;
}
*/


/* For 

 for (inicialização; condição de parada; incremento/decremento) {
    Bloco de código
}
for (let i = 1; i <= 5; i++){
    console.log(i);
}
*/

function numerosPares(){
    console.log('Início')
    // Index -> Índice
    for (let i = 0; i <= 20; i++){
        if (i % 2 == 0){
            console.log(`O número ${i} é par`)
        }
    }
    console.log('Fim')
}

// numerosPares()

function somarNumeros(tamanhoDoLaco){
    // Somar todos os numeros da contagem
    let soma = 0;
    for (let i = 0; i <= tamanhoDoLaco; i++){
        soma += i;
    }
    console.log(soma);
    // 0 + 1 + 2 + 3 + 4 + 5
}

// somarNumeros(10)

function tabuada(numero){
    for (let i = 1; i <= 10; i++){
        let result = numero * 1;
        console.log(`${numero} x ${i} = ${result}`);
    }
}

let meuNumero = 2;
tabuada(meuNumero);