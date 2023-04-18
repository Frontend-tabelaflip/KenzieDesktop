function format2Decimals(n){
    let str = `${n}`
    if(str.lenght < 2){
        return '0' + str;
    }else{
        return str;
    }
}


let dia = '18';
let mes = '4';
let ano = '2023';

let dataFormatada = `${format2Decimals(dia)}/${format2Decimals(mes)}/${ano}`;


//ESCOPOS

//Escopo Global
const escopoGlobal = 'Global';

//Escopo de bloco
{
    const escopoBloco = 'Bloco';
    // console.log(escopoGlobal);
    // console.log(escopoBloco);
}
// console.log(escopoBloco);

//Escopo de função
function teste(){
    let escopoFuncao = 'Função';
    // console.log(escopoFuncao)
}
teste()


//Verificar se o número é par
//Verificar se o número é impar