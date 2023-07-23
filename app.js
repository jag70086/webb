let left_btn = document.getElementsByClassName('bi bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let low_btn = document.getElementById('low_q');
let high_btn = document.getElementById('high_q');
let h4 = document.getElementById('h4');

left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
})
let json_url ='movie.json';
