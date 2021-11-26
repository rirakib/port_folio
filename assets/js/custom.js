
//NAVBAR TOGGLE FUNCTION HERE.......

const hammerbug = document.querySelector('.hammerbug');
const navMenu = document.querySelector('.nav_menu');

hammerbug.addEventListener("click",function(){
    navMenu.classList.toggle('active');
    hammerbug.classList.toggle('toggle_menu')
})