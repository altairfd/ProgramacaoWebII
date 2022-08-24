fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((dados) => getCountry(dados))
    .catch((err) => console.log(err));


function getCountry(dados) {
    let select = document.getElementById('country')
    let index = 0;
    for (let countries of dados) {
        select += `
                <option value="${index}">${countries.name}</option>
            `;
        index++;
    }
    document.querySelector("#country").insertAdjacentHTML("beforeend", select);
}

function getInfo() {
    let select = document.querySelector("#country")
    let country = select.options[select.selectedIndex].text;
    fetch("https://restcountries.com/v2/name/"+country+"?fields=flag,name,borders,capital,subregion,population,area,currencies,languages")
        .then((response) => (response.json()))
        .then((data) => makeInfo(data))
        .catch((err) => console.log(err));
}

function makeInfo(data) {
    let infoCountries = document.querySelector("#infoCountries")
    infoCountries.innerHTML = "";

    let border = data[0].borders;
    if (data[0].borders == undefined) {
        border = "Sem fronteira"
    }

    let info = `
        <h2>Informações sobre: ${data[0].name}</h2>
        <li>Bandeira: <img src="${data[0].flag}" alt=""></li>
        <li>Capital: ${data[0].capital}</li>
        <li>Continente: ${data[0].subregion}</li>
        <li>População: ${data[0].population}</li>
        <li>Area: ${data[0].area}</li>
        <li>Moeda: ${data[0].currencies[0].code}</li>
        <li>Idioma: ${data[0].languages[0].nativeName}</li>
        <li>Fronteira: ${border}</li>
        `;
    infoCountries.innerHTML = info;
}


