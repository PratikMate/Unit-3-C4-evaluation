// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();

let news_data = JSON.parse(localStorage.getItem("news"))

let main = document.getElementById('detailed_news');

let append_data = ({ urlToImage,description,content}) => {
    let div2 = document.createElement('div');

    let img = document.createElement('img');
    img.src = urlToImage;

    let h3 = document.createElement('h3');
    h3.innerText = description;

    let p = document.createElement('p');
    p.innerText = content;

    div2.append(h3, p);
    main.append(img, div2);
}

append_data(news_data);

let search = (el) => {
    if (el.key == "Enter") {
        let query = document.getElementById('search_input').value;

        localStorage.setItem("q", query)
        window.location.href = "../search.html"
    }
}

document.getElementById('search_input').addEventListener("keydown", search);