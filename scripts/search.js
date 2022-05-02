// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();

import { getData, append } from "../scripts/fetch.js";

let cont = document.getElementById('results');

let query = localStorage.getItem("q")
let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

getData(url).then((res) => {
    cont.innerHTML = null;
    append(res.articles, cont)
});

let search = (el) => {
    if (el.key == "Enter") {
        //window.location.href = "../search.html"
        let query = document.getElementById('search_input').value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

        getData(url).then((res) => {
            cont.innerHTML = null;
            append(res.articles, cont)
        });
    }
}

document.getElementById('search_input').addEventListener("keydown", search);


