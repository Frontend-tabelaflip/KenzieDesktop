// EXERCÍCIO 1

function toSquare() {
    for (let i = 15; i <= 200; i++) {
        console.log(i * i);
    }
}

// toSquare();

// EXERCÍCIO 2

function somarNumeros(range) {
    let soma = 0;
    for (let i = 1; i <= range; i++) {
        soma += i;
    }
    console.log(soma);
}

// somarNumeros(100)

// EXERCÍCIO 3

function divisivelQuatro() {
    for (let i = 0; i <= 200; i++) {
        if (i % 4 == 0) {
            console.log(i)
        }
    }
}

// divisivelQuatro()

// EXERCÍCIO 4

function sumResult(){
    let soma = 0;
    let media = 0;
    for (let i = 50; i <= 70; i++){
        if (i % 2 == 0){
            soma += i;  // soma = soma + i
            media++;    // 
        }
    }
    console.log(`A soma é ${soma} e a média é ${n / media}.`)
}
sumResult()