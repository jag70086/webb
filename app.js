let left_btn = document.getElementsByClassName('bi bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName("search")[0];
let search_input = document.getElementById("search_input");
let button = document.getElementById('download_main');
let viewall = document.getElementById('viewall');

left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
})
viewall.addEventListener('click', ()=> {
    viewall.href = "all+contents.html"
});
let json_url ='movie.json';

fetch(json_url).then(Response => Response.json())
.then((data) => {
    data.forEach((ele, i) => {
        let {name, imdb, date, desc, pub, bposter, sposter, genre, url} = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
            </div>
        </div>
        `
        cards.appendChild(card);
    });

    data.forEach(element => {
        let {name, imdb, date, sposter, genre, url} = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date} , <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
                        </div>
        `
        search.appendChild(card);
    });
    search_input.addEventListener('keyup', ()=> {
        let fliter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');

        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            let TextValue = b.textContent || b,innerText;
            if (TextValue.toUpperCase().indexOf(fliter) > -1) {
                a[index].style.display = 'flex';
                search.style.visibility = 'visible';
                search.style.opacity = 1;
            } else {
                a[index].style.display = 'none';
            }
        }
    })

    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            play.innerHTML = `Pause <i class="bi bi-pause-fill"></i>`
        } else {
            video.pause();
            play.innerHTML = `Play <i class="bi bi-play-fill"></i>`
        }
    });
    

    let series = document.getElementById('series');
    series.addEventListener("click", ()=>{
        cards.innerHTML = '';

        let series_array = data.filter(ele => {
            return ele.type == "series";
        });
        series_array.forEach((ele, i) => {
            let {name, imdb, date, bposter, sposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        });
        
    });


    let moviess = document.getElementById('movies');
    moviess.addEventListener("click", ()=>{
        cards.innerHTML = '';

        let movies_array = data.filter(ele => {
            return ele.type == "movie";
        });
        movies_array.forEach((ele, i) => {
            let {name, imdb, date, bposter, sposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        });
        
    });

    let kids = document.getElementById('kids');
    kids.addEventListener("click", ()=>{
        cards.innerHTML = '';

        let kids_array = data.filter(ele => {
            return ele.type == "kids";
        });
        kids_array.forEach((ele, i) => {
            let {name, imdb, date, bposter, sposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        });
    });
    button.addEventListener("click", function () {
        window.location.href = data[0].url; // Replace this URL with your desired destination
      });

    document.getElementById('title').innerText = data[0].name;
    document.getElementById('desc').innerText = data[0].desc;
    document.getElementById('gen').innerText = data[0].genre;
    document.getElementById('date').innerText = data[0].date;
    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`
});