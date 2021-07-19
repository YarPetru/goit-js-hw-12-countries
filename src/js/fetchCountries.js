export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).
        then(response => {
            
        if(response.ok === false) {
            throw Error('Такой страны нет в списке доступных');
        }
        return response.json();
        
    })
}
