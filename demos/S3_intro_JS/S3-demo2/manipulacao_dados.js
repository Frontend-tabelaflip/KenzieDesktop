// console.log('testando a aplicação...')
let nome = 'Julian';
let sobrenome = 'Cazuni';
let idade = 31;

//Julian Cazuni tem 31 anos de idade
{
    let nomeCompleto1 = nome + ' ' + sobrenome + ' tem ' + idade + ' anos de idade';
    let nomeCompleto2 = `${nome} ${sobrenome} tem ${idade} anos de idade`;

    // console.log(nomeCompleto2);

    let countChar1 = nomeCompleto1.length;
    let countChar2 = nomeCompleto2.length;

    // console.log(countChar1,countChar2);
}

let primeiraLetra = nome[0];
let segundaLetra = sobrenome[0];

let abreviacao = primeiraLetra + segundaLetra;

let ultimo_nome = nome[nome.length - 1];
let ultimo_sobrenome = sobrenome[sobrenome.length - 1];


console.log(ultimo_nome, ultimo_sobrenome);