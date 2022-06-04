const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
const option = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

document.getElementById('current').textContent = new Date().toLocaleDateString('en-US', option);
const yearSpan = new Date()
const currentYear = yearSpan.getFullYear();

document.getElementById("currentYear").textContent = currentYear


//Hamburger-menu

function toggleMenu() {
    document.getElementById("hamburger-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");

x.onclick = toggleMenu;


// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// banner

const d = new Date();
if (( d.getDay()  == 1) ||  ( d.getDay()  == 2)) {
    document.querySelector('#banner').style.display="block"; 
};

// weather
