let getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();

        console.log(data)
        return data;
    } catch(err) {
        console.log(err)
    }
}

let append = (data,cont) => {
    data.forEach(({urlToImage,title,description,content}) => {
        let main = document.createElement('div');
        main.setAttribute = ("class", "news")

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        let img = document.createElement('img');
        img.src = urlToImage;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let p = document.createElement('p');
        p.innerText = description;

        let new1 = {
            urlToImage,
            description,
            content
        }

        main.addEventListener("click", function() {
            news(new1)
            //console.log(new1)
        })

        div1.append(img);
        div2.append(h3, p);
        main.append(div1, div2);
        cont.append(main);

    })
}

let news = (new1) => {
    localStorage.setItem("news", JSON.stringify(new1));
    window.location.href="../news.html"
}
export { getData, append };