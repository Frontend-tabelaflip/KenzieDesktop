// function piramideNumerica(tamanhoPiramide) {
//   for (let i = 1; i <= tamanhoPiramide; i++) {
//     let linha = "";
//     // console.log(i);
//     for (let j = 1; j <= i; j++) {
//       linha += j + " ";
//       // console.log(j);
//     }
//     console.log(linha);
//   }
// }

// piramideNumerica(5);

// ARRAY
/* 
// índice              0    1   2   3   4
const primeiroArray = [10, 20, 30, 40, 50]

console.log(primeiroArray);
console.table(primeiroArray);
console.log(primeiroArray[3]);

primeiroArray[0] = 100;
console.log(primeiroArray);
*/
/*
// índice              0    1    2    3    4
const segundoArray = [10, 'B', 3.7, true, "M1"];
const tamanhoArr2 = segundoArray.length;
const ultimoIndiceArr2 = tamanhoArr2 - 1;
console.table(segundoArray[ultimoIndiceArr2]);
*/

/* PUSH
const terceiroArray = [];
console.log(terceiroArray);
terceiroArray.push("Kayan");
console.log(terceiroArray);
terceiroArray.push("Lorena");
console.log(terceiroArray);

// UNSHIFT

terceiroArray.unshift("Crhystian");
console.table(terceiroArray);

// Remover elementos
const valorRemovidoFinal = terceiroArray.pop();
console.log(terceiroArray);
console.log(valorRemovidoFinal);

const valorRemovidoInicio = terceiroArray.shift();
console.log(valorRemovidoInicio)
*/

/*
const users = [];
let username = "";

while (username.toLocaleLowerCase() !== "sair") {
  username = prompt("Digite um nome:");
  users.push(username);
}

users.pop();
console.log(users);

function showArrayValues(order) {
  for (let i = 0; i < order.length; i++) {
    console.log(order[i]);
  }
}

const order = ["M1", "M2", "M3", "M4", "M5"];
// showArrayValues(order);

function searchOrder(order, wordToSearch) {
  for (let i = 0; i < order.length; i++) {
    console.log(order[i]);
    if (order[i] === wordToSearch) {
      return "Valor encontrado";
    }
  }
  return "Valor não encontrado";
}

const instructorArray = ["Luiz", "Alessandra", "Vilson"];
const searchWord = "Alessandra";

const searchResult = searchOrder(instructorArray, searchWord);
console.log(searchResult);
*/

let lista = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let elemento = lista[1][1];

// console.log(elemento);

for (let i = 0; i < lista.length; i++) {
  for (let j = 0; j < lista[i].length; j++) {
    console.log(lista[i][j])
  }
}
