const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
const option = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

document.getElementById('current').textContent = new Date().toLocaleDateString('en-US', option);
const yearSpan = new Date()
const currentYear = yearSpan.getFullYear();

document.getElementById("currentYear").textContent = currentYear

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");} 
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// banner

const d = new Date();
if (( d.getDay()  == 1) ||  ( d.getDay()  == 4)) {
    document.querySelector('#banner').style.display="block"; 
};

// weather
