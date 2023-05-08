let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

function userCheck(userName, userCPF) {
    let nameUpper = userName.toLowerCase();
    let result = nameUpper[0].toUpperCase() + nameUpper.substring(1);
    
    console.log(result);
    if (result == ganhador.nome && userCPF == ganhador.cpf) {
        return "É ganhador!";
    }
    return "Não é ganhador!";
}

console.log(userCheck('Adamastor', '123.321.789-98'));
