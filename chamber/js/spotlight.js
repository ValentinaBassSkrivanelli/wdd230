const requestURL = 'https://valentinabassskrivanelli.github.io/wdd230/chamber/json/data.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    for (let i = 0; i < 3; i++) {
        displayBusiness(business[i]);
    }
   
});
function displayBusiness(content) {
    // Create elements to add to the document
    let company = document.createElement('section');
    let logoCompany = document.createElement('img');
    let businessName = document.createElement('h2');
    let membership = document.createElement('h3');
    let city = document.createElement('p');
    let telPhone = document.createElement('p');
    let webSite = document.createElement('a');
  
    logoCompany.setAttribute('src', content.imageurl);
    logoCompany.setAttribute('alt', `logo of ${content.name} company `);
    logoCompany.setAttribute('loading', 'lazy');
 
    businessName.textContent = `${content.name}`;
    city.textContent = `${content.city} `;
    membership.textContent = `${content.membership} `;
    telPhone.textContent = `${content.tel} `;

    webSite.textContent = `${content.url} `;
    webSite.href = `${content.url} `;

    company.appendChild(logoCompany);
    company.appendChild(businessName);
    company.appendChild(membership);
    company.appendChild(city);
    company.appendChild(telPhone);
    company.appendChild(webSite);

    document.querySelector('#spot').appendChild(company);
}