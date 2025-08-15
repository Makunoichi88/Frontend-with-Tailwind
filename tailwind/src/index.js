const Button1 = document.querySelector('#Button1');
const MenuDesplegable = document.querySelector('#MenuDesplegable');
const Nav = document.querySelector('#Nav');
const Button2 = document.querySelector('#Button2');

Button1.addEventListener('click', () => {

MenuDesplegable.classList.remove('translate-x-full');

})

Button2.addEventListener('click', () => {

MenuDesplegable.classList.add('translate-x-full');

})

MenuDesplegable.addEventListener('click', () => {

MenuDesplegable.classList.add('translate-x-full');

})