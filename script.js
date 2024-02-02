// retrieves fact and generate-btn id from HTML
let fact = document.getElementById("fact");
let btn = document.getElementById("generate-btn");

let options = {
    method: "GET", headers: {"x-api-key": apiKey}
};

let url = "https://api.api-ninjas.com/v1/facts?limit=1"; // random facts API URL

let generateQuote = () => {
    fetch(url, options)  // fetches the URL and API key
    .then((response) => response.json())  // converts response to JSON
    .then((data) => {
        fact.innerText = data[0].fact;  // updates fact text with the fact
    })
}

btn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);  // generates quote upon loading of screen