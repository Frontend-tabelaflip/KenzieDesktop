//OBJETOS
let pessoa = {
    nome: 'Thiago',
    sobrenome: 'Koman',
    idade: 25,
    aniversario: [1,22],
    admin: true,
    removeAdmin: function (obj) {
        obj.admin = false;
    }
}
console.log(pessoa)
pessoa.removeAdmin(pessoa);

//FUNÇÃO FOI PARA O OBJETO
// function removePrivilegioAdmin(obj) {
//     obj.admin = false;
//     return obj;
// }
// removePrivilegioAdmin(pessoa);

function converteAniversarioParaObj(obj) {
    obj.aniversario = {
        dia: obj.aniversario[1],
        mes: obj.aniversario[0]
    }
    return obj;
}
converteAniversarioParaObj(pessoa);


console.log(pessoa);

let arrayPessoa = ['Thiago', 'Koman', 25, [1, 22], true]

// console.log(pessoa);
// console.log(pessoa.aniversario[1]);

// console.log(pessoa['nome']);

console.log(`Seja bem vindo ${pessoa.nome} ${pessoa.sobrenome}, você tem ${pessoa.idade} anos de idade e faz aniversário em ${pessoa.aniversario.dia}/${pessoa.aniversario.mes}.`)

let array = ['nome', 'sobrenome'];

for(let i = 0; i < array.length ; i++) {
    let chave = array[i];
    // console.log(pessoa[chave])
}