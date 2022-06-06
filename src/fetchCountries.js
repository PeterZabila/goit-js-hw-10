

export default function fetchCountries(name) {
    
    fetch("https://restcountries.com/v3.1/name/{name}").then(result => console.log(result)).catch(console.log("Not found"))
};