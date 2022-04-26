const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const yearSpan = document.querySelector("#CurrentYear");
const currentYear = new Date();

yearSpan.innerHTML = currentYear.getFullYear();
console.log(currentYear);