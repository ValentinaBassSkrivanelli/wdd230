document.getElementById('formTime').value = new Date().toString();

window.localStorage.setItem("storemydata", document.getElementById("formTime").value);

const result = window.localStorage.getItem("storemydata");

console.log(result);