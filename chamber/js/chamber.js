const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
const option = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

document.getElementById('current').textContent = new Date().toLocaleDateString('en-US', option);
const yearSpan = new Date()
const currentYear = yearSpan.getFullYear();

document.getElementById("currentYear").textContent = currentYear


//Hamburger-menu

//function toggleMenu() {
   // document.getElementById("hamburger-nav").classList.toggle("open");
    //document.getElementById("hamburger-button").classList.toggle("open");
//}

//const x = document.getElementById("hamburger-button");

//x.onclick = toggleMenu;


// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// banner

const d = new Date();
if (( d.getDay()  == 1) ||  ( d.getDay()  == 2)) {
    document.querySelector('#banner').style.display="block"; 
};

// lazy load
const lazy = document.querySelectorAll("[data-src]");

function placeholderImage(img) {
    const srcImage = img.getAttribute("data-src");
    if (!srcImage) {
        return;
    }
    img.src = srcImage;
}

const setsImages = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            placeholderImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, setsImages);

lazy.forEach(image => {
    imgObserver.observe(image);
});

// local storage
// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();

