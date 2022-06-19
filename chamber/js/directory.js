const requestURL = 'https://valentinabassskrivanelli.github.io/wdd230/chamber/json/data.json';
const companys = document.querySelector('#companys');
console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    business.forEach(displayBusiness);
});
function displayBusiness(content) {
    // Create elements to add to the document
    let company = document.createElement('section');
    let logoCompany = document.createElement('img');
    let businessName = document.createElement('h2');
    let city = document.createElement('p');
    let telPhone = document.createElement('p');
    let webSite = document.createElement('p');
  
    logoCompany.setAttribute('src', content.imageurl);
    logoCompany.setAttribute('alt', `logo of ${content.name} company `);
    logoCompany.setAttribute('loading', 'lazy');

    businessName.textContent = `${content.name}`;
    city.textContent = `${content.city} `;
    telPhone.textContent = `${content.tel} `;
    webSite.textContent = `${content.url} `;

    company.appendChild(logoCompany);
    company.appendChild(businessName);
    company.appendChild(city);
    company.appendChild(telPhone);
    company.appendChild(webSite);

    document.querySelector('#companys').appendChild(company);
}
// grid and list 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("#companys");
const gridclass = document.querySelector("grid");
const listclass= document.querySelector("list");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
  display.classList.remove("list");
});


listbutton.addEventListener("click", showList); // example using defined function

function showList() {
display.classList.add("list");
display.classList.remove("grid");
}
