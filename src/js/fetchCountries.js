const baseURL = 'https://restcountries.eu/rest/v2';

const fetchCountries = searchQuery => {
    return fetch(`${baseURL}/name/${searchQuery}`)
    .then(response => response.json())
}

export default fetchCountries