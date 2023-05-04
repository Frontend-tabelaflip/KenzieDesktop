const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
]


function contaTotal() {
    return `O total de veículos é ${carros.length}`
}

//   console.log(contaTotal(carros));

function precoTotal() {
    let somaTotal = 0;
    for (let i = 0; i < carros.length; i++) {
        // console.log(somaTotal)
        somaTotal += carros[i].preco;
    }
    return `'A soma do preço de todos veículos é R$ ${somaTotal}'`
}

// console.log(precoTotal(carros));

function filtraPorMarca(carros, marca) {
    let resultado = []

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].marca === marca) {
            resultado.push(carros[i])
        }
    }

    return resultado;
}

// console.log(filtraPorMarca(carros, "VW"));

function filtraPorAcessorio(carros, acessorios) {
    let resultado = [];

    for (let i = 0; i < carros.length; i++) {
        for (let j = 0; j < carros[i].acessorios.length; j++) {
            if (carros[i].acessorios[j] === acessorios) {
                resultado.push(carros[i]);
            }
        }
    }
    return resultado;
}

// console.log(filtraPorAcessorio(carros, 'Vidro Elétrico'));

function eCarroCompleto() {
    let resultado = [];

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].completo === true) {
            resultado.push(carros[i])
        }
    }
    return resultado;
}

// console.log(eCarroCompleto(carros))

function adicionaCarro(carro) {

    carros.push(carro);

    return carros;

}

// console.log(adicionaCarro({
//     modelo: "WRV",
//     marca: "Honda",
//     ano: "2022",
//     cor: "Preto",
//     completo: true,
//     acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//     preco: 89000.00
// }));

function removeCarro(carros, indice) {
    if (indice < 0 || indice >= carros.length) {
        console.log("Posição inválida.");
        return carros;
    }

    const listaAtualizada = [];

    for (let i = 0; i < carros.length; i++) {
        if (i !== indice) {
            listaAtualizada.push(carros[i]);
        }
    }

    return listaAtualizada;
}

// console.log(removeCarro(carros, 15));

function contaCarrosNovos() {
    let contador = 0;

    for (let i = 0; i < carros.length; i++) {
        const ano = carros[i].ano;
        if (ano >= 2013) {
            contador++;
        }
    }
    return contador;
}

// console.log(contaCarrosNovos(carros));

function atualizaInformacaoCarros(carros, indice, pessoa) {

    carros[indice].donos = pessoa;

    return carros;
}

console.log(atualizaInformacaoCarros
    (carros, 2, {
        nome: "João",
        telefone: "91919-9191"
    }))

