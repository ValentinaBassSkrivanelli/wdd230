const requestURL = 'https://valentinabassskrivanelli.github.io/wdd230/chamber/json/data.json';
const companys = document.querySelector('.companys');
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
    let logo = document.createElement('img');
    let businessName = document.createElement('h2');
    let city = document.createElement('p');
    let telPhone = document.createElement('p');
    let webSite = document.createElement('p');
  
    logo.setAttribute('src', content.imageurl);
    logo.setAttribute('alt', `logo of ${content.name} company `);
    logo.setAttribute('loading', 'lazy');

    businessName.textContent = `${content.name}`;
    city.textContent = `${content.city} `;
    telPhone.textContent = `${content.tel} `;
    webSite.textContent = `${content.url} `;

    company.appendChild(logo);
    company.appendChild(businessName);
    company.appendChild(city);
    company.appendChild(telPhone);
    company.appendChild(webSite);

    document.querySelector('div.companys').appendChild(company);
}