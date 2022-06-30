const requestURL = 'https://valentinabassskrivanelli.github.io/wdd230/chamber/json/data.json';

console.log(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
      displayBusiness1(business[0]);
      displayBusiness2(business[1]);
      displayBusiness3(business[2]);

 
       
});
function displayBusiness1(content) {
    // Create elements to add to the document
    let company = document.createElement('div');
    let logoCompany = document.createElement('img');
    let businessName = document.createElement('h2');
    let telPhone = document.createElement('p');
    let webSite = document.createElement('a');
  
    logoCompany.setAttribute('src', content.imageurl);
    logoCompany.setAttribute('alt', `logo of ${content.name} company `);
    logoCompany.setAttribute('loading', 'lazy');
 
    businessName.textContent = `${content.name}`;
    telPhone.textContent = `${content.tel} `;
    webSite.textContent = `${content.url} `;
    webSite.href = `${content.url} `;

    company.appendChild(logoCompany);
    company.appendChild(businessName);
    company.appendChild(telPhone);
    company.appendChild(webSite);

    document.querySelector('.spotlight1').appendChild(company);
   // document.querySelector('.spotlight2').appendChild(company);
    //document.querySelector('.spotlight3').appendChild(company);
}
function displayBusiness2(content) {
  // Create elements to add to the document
  let company = document.createElement('div');
  let logoCompany = document.createElement('img');
  let businessName = document.createElement('h2');
  let telPhone = document.createElement('p');
  let webSite = document.createElement('a');

  logoCompany.setAttribute('src', content.imageurl);
  logoCompany.setAttribute('alt', `logo of ${content.name} company `);
  logoCompany.setAttribute('loading', 'lazy');

  businessName.textContent = `${content.name}`;
  telPhone.textContent = `${content.tel} `;
  webSite.textContent = `${content.url} `;
  webSite.href = `${content.url} `;

  company.appendChild(logoCompany);
  company.appendChild(businessName);
  company.appendChild(telPhone);
  company.appendChild(webSite);

  document.querySelector('.spotlight2').appendChild(company);
}

function displayBusiness3(content) {
  // Create elements to add to the document
  let company = document.createElement('div');
  let logoCompany = document.createElement('img');
  let businessName = document.createElement('h2');
  let telPhone = document.createElement('p');
  let webSite = document.createElement('a');

  logoCompany.setAttribute('src', content.imageurl);
  logoCompany.setAttribute('alt', `logo of ${content.name} company `);
  logoCompany.setAttribute('loading', 'lazy');

  businessName.textContent = `${content.name}`;
  telPhone.textContent = `${content.tel} `;
  webSite.textContent = `${content.url} `;
  webSite.href = `${content.url} `;

  company.appendChild(logoCompany);
  company.appendChild(businessName);
  company.appendChild(telPhone);
  company.appendChild(webSite);

  document.querySelector('.spotlight3').appendChild(company);
}



