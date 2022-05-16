const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const option = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
document.getElementById('current').textContent = new Date().toLocaleDateString('en-US', option);

const yearSpan = new Date()
const currentYear = yearSpan.getFullYear();

document.getElementById("currentYear").textContent = currentYear
function toggleMenu() {
document.getElementById("primaryNav").classList.toggle("oppen");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('primaryNav')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
