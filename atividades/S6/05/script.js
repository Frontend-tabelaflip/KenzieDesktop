let pessoa = {
    nome: '',
    anoNascimento: '',
    cpf: '',
    cidade: '',
    estado: '',
    logradouro: ''
}

let escola = {
    nome: '',
    cnpj: '',
    areaDeAtuacao: '',
    cidade: '',
    estado: '',
    logradouro: '',
    curso: '',
}

let curso = {
    nome: '',
    duracaoAnos: '',
    turma: '',
    modulos: ''
}

let endereco = {
    cidade: '',
    estado: '',
    logradouro: '',
    cep: ''
}

// SEGUNDA PARTE

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true  
  }

  function obterPlaca() {
    return carro.placa
  }

//   console.log(obterPlaca());

function verificarClasses() {
    return carro.classes
}

// console.log(verificarClasses());

function potenciaReal() {
    if (carro.luxo == true) {
        return carro.potencia ** 2;
    }
    return carro.potencia
}

// console.log(potenciaReal());


function adicionarNovaClasse(novaClasse) {
    const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê'];
    
    if (carro.classes.length >= 3) {
        return "Este carro não pode ter mais classes"
    } 

    if (!classesPermitidas.includes(novaClasse)) {
        return "Classe não permitida";
    }

    if (carro.classes.includes(novaClasse)) {
        return `O carro já possui a classe ${novaClasse}`;
    }

    carro.classes.push(novaClasse)
    return `Classe ${novaClasse} adicionada com sucesso`
}

// console.log(adicionarNovaClasse('cupê'));
// console.log(adicionarNovaClasse('suvv'));
// console.log(adicionarNovaClasse('crossover'));
// console.log(adicionarNovaClasse('suv'));
// console.log(carro.classes);

function naoMaisLuxo() {
    if (carro.estacionado == true && carro.luxo == true) {
        carro.luxo = false
        return `O carro ${carro.placa} não é mais considerado um carro de luxo`
    }
}

console.log(naoMaisLuxo());