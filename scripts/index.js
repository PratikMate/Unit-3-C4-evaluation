// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();

import { getData, append } from "../scripts/fetch.js";

let query = 'in';
let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;

let cont = document.getElementById('results');

getData(url).then((res) => {
    //console.log(res.articles)
    cont.innerHTML = null;
    append(res.articles, cont)
});


let sidebar = document.getElementById('sidebar').children;

for (let el of sidebar) {
    el.addEventListener("click", country);
}

function country() {
    console.log(this.id)
    let query = this.id;
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;

    getData(url).then((res) => {
        cont.innerHTML = null;
        append(res.articles, cont)
    });
}

let search = (el) => {
    if (el.key == "Enter") {
        let query = document.getElementById('search_input').value;

        localStorage.setItem("q",query)
        window.location.href = "../search.html"
    }
}

document.getElementById('search_input').addEventListener("keydown", search);