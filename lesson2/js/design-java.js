const options = {weekday: 'long' , day: 'numeric', month: 'long' , year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const yearSpan = new Date()
const currentYear = yearSpan.getFullYear();

document.getElementById("currentYear").textContent = currentYear