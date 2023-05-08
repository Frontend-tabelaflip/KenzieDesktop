let btn_show = document.querySelector('#show');
let btn_hide = document.querySelector('#hide');
let p = document.querySelector('#parag');

btn_show.addEventListener('click', function (e) {
    p.style.color = 'black';
    p.classList.remove('hidden');
})

btn_hide.addEventListener('click', function (e) {
    p.style.color = 'white';
    p.classList.add('hidden');
}) 