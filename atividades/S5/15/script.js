const listaA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


function calcularQuadrados(lista) {
    const listaB = [];

    for (i = 0; i < lista.length; i++) {
        listaB.push(lista[i] * lista[i]);
    }
    return listaB
}

// console.log(calcularQuadrados(listaA));


