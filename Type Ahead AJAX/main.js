const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
const list = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex);
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    if(this.value === ''){ return list.innerHTML = '' };
    const matchArray = findMatches(this.value.trim(), cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value.trim(), 'gi');
        const cityName = place.city.replace(regex, `<span class="highlight">${this.value.trim()}</span>`);
        return `
        <li>
        ${cityName} - ${numberWithCommas(place.population)}
        </li>
        `;
    }).join('');
    list.innerHTML = html;
}

input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);