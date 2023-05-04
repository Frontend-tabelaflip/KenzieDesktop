//Propriedades

//Atributos
let produto = {
    tipo: "alimento",
    nome: "feijão carioca",
    valor: 5.49,
    unidade: "kg",
    quantidade: 1
}

//Métodos
let gato = {
    som: 'Minhau',
    miar: function () {
        console.log(this.som);
    },
    ronronar: function () {
        console.log('ronronron');
    }
}
gato.ronronar();

function miar(som) {
    console.log(som);
}
// miar()


function calculadora(a, b, op) {
    if (op == '+') {
        return a + b;
    } else if (op == '-') {
        return a - b;
    } else if (op == '*') {
        return a * b;
    } else if (op == '/') {
        return a / b;
    }
}

// console.log(calculadora(3,4,'-'));
// console.log(calculadora(5,2,'*'));


let objCalc = {
    a: 12,
    b: 3,
    somar: function () {
        return objCalc.a + objCalc.b;
    },
    subtrair: function () {
        return this.a - this.b;
    },
    multiplicar: function () {
        return this.a * this.b;
    },
    dividir: function () {
        return this.a / this.b;
    }
}
// console.log(objCalc.somar());
// console.log(objCalc.subtrair());
// console.log(objCalc.multiplicar());
// console.log(objCalc.dividir());


function formatNumber_2Decimals(n) {
    let num = n.toFixed(2);
    return parseFloat(num)
}

function formatNumber_percentageToUnity(n) {
    let percent = n / 100;
    return percent;
}

let pet = {
    especie: 'Gato',
    pelagem: 'Curta',
    raca: 'Siamês',
    nome: 'Felicia',
    miar: function () {
        console.log('Miau');
    },
    ronronar: function () {
        console.log('RonRonRon');
    }
}

let pets = [
    {
        especie: 'Gato',
        nome: 'Felicia',
        som: 'Miaau',
        emitirSom: function () {
            return this.som;
        }
    },
    {
        especie: 'Cachorro',
        nome: 'Rex',
        som: 'Auau',
        emitirSom: function () {
            return this.som;
        }
    },
    {
        especie: 'Periquito',
        nome: 'Carlos',
        som: 'Piupiu',
        emitirSom: function () {
            return this.som;
        }
    }
];

function procuraPet(especie, nome) {
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        if (especie == pet.especie.toLowerCase() && nome == pet.nome.toLowerCase()) {
            return pet.emitirSom();
        }
    }
    return 'Pet perdido ou não encontrado';
}

console.log(procuraPet('periquito', 'carlos'));