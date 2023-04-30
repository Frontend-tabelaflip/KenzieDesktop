/*
    1.  Escreva uma função que receba uma lista A de dimensão 30 composta apenas por números inteiros.
        A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.
        Exemplos de saída:
        A lista recebida possui x elementos pares e y elementos ímpares.
*/

const list30Elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function oddOrEvenList(listA) {
    let amountOfEven = 0;

    for (let i = 0; i < listA.length; i++) {
        const element = listA[i];

        amountOfEven += element % 2 === 0;
    }
    const amountOfOdd = listA.length - amountOfEven;

    let result = `A lista recebida possui ${amountOfEven} elementos pares e ${amountOfOdd} elementos impares.`;

    return result;

}

console.log("1.", oddOrEvenList(list30Elements));

/*
  2.  Escreva uma função que recebe uma lista A de tamanho 10, composta por números inteiros.
  
      Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.
  
      Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista"
  */

const list10Elements = [57, 87, 92, 1, 36, 29, 48, 44, 52, 66];

function identifiesOddInList(listA) {
    let amountOfOdd = 0;

    for (let i = 0; i < listA.length; i++) {
        const element = listA[i];

        if (element % 2 !== 0) {
            amountOfOdd++;
        }
    }
    const percentageOfOdd = (amountOfOdd / listA.length) * 100;

    const result = `O total de valores ímpares é ${amountOfOdd} e corresponde a ${percentageOfOdd}% da lista`;

    return result;
}


console.log("2.", identifiesOddInList(list10Elements));

/*
  3.  Escreva uma função que receba como parâmetro duas listas A e B, 
      cada uma com dez elementos.
  
      A função deve realizar a validação do tamanho da lista. 
      Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".

      - if (listSize != 10) {
        return "Lista fora dos padrões necessários";
      } 
  
      A lista A deve ser composta por valores divisíveis por 2 e 3, 
        if (listA[i] % (2 && 3) === 0)

      enquanto a lista B deve ser composta apenas por valores múltiplos de 5.
        listB[i] % 5 === 0
  
      A composição das listas deve ser validada pela função. 
      Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".
  
      Construir uma lista C que seja o resultado da junção das listas A e B, 
      de modo que contenha 20 elementos.
  
      Retorne a lista C resultante.
  */

const listATenElements = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const listBTenElements = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function generateList(listA, listB) {
    const checkListPattern = listA.length !== 10 || listB.length !== 10;

    if (checkListPattern) {
        return "Lista fora dos padrões necessários";
    }

    const listC = [];

    for (let index = 0; index < 10; index++) {
        const elementA = listA[index];
        const elementB = listB[index];

        if (elementA % 2 !== 0 || elementA % 3 !== 0 || elementB % 5 !== 0) {
            return "Valores não permitidos encontrados";
        }
        listC.push(elementA, elementB);
    }
    return listC;
}

console.log("3.", generateList(listATenElements, listBTenElements));