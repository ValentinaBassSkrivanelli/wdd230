document.getElementById('formTime').value = new Date().toString();

const result = window.localStorage.setItem("storemydata", document.getElementById("formTime").value);

console.log(result)
 