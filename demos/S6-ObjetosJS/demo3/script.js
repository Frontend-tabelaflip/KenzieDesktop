let color = 'grey';
window.document.body.style = `background: ${color}`;

let title = 'Demo 3';
document.title = title;

let titulo = document.querySelector('#titulo');
titulo.style = `color: red`

let texto = document.querySelector('p');
texto.style = `font-weight: bold;`;

let ancora = document.querySelector('a');
ancora.style = `text-decoration: none;`;

let divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    div.innerHTML = 'Atualizado';
}

document.getElementById('div');
document.getElementsByClassName('div');
document.getElementsByTagName('div');