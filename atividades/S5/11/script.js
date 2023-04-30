function convertStringToArray(text) {
    if (typeof text !== "string" || text.length < 5) {
      return "O texto precisa ser do tipo string e ter pelo menos 5 caracteres.";
    }
  
    return [text];
  }
  
//   console.log("1.", convertStringToArray("Kenzie"));


let arr = ["Hermanoteu", "Olonéia", "Micalatéia", "Godart"];

function findElementArray(numberParam) {
  if (typeof numberParam !== "number") {
    return "O argumento precisa ser do tipo 'number";
  }

  let element = arr[numberParam];

  if (element) {
    return element;
  }

  return "Valor não encontrado";
}

// console.log("2.", findElementArray(2));

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkOddOrEven(valor) {
    let check = numArray[valor];
    
    if (check % 2 !== 0) {
        return "O valor encontrado nesta posição é ímpar";
    }
    return "O valor encontrado nesta posição é par";
}

// console.log("3.", checkOddOrEven(4));

