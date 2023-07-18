let json_url ='movie.json';
fetch(json_url).then((Response) => Response.json())
.then(data => {
let movies_array = data.filter(ele => {
    return ele.name == "Secret Invasion";
});
document.getElementById('title').innerText = movies_array[0].name;
document.getElementById('low_q').href = movies_array[0].low;
document.getElementById('high_q').href = movies_array[0].high;
document.getElementById('gen').innerText = movies_array[0].genre;
document.getElementById('desc').innerText = movies_array[0].desc;
document.getElementById('date').innerText = movies_array[0].date;
document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${movies_array[0].imdb}`
document.getElementsByTagName('video')[0].setAttribute('src', movies_array[0].trailer);
document.getElementsByTagName('video')[0].play();
document.title = `${movies_array[0].name}`
});
