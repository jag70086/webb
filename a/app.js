// Get the progress element and loading message
const progressBar = document.getElementById('loadingBar');
const hmm = document.getElementById('hi');
const hmm1 = document.getElementById('hi1');
const hmm2 = document.getElementById('hi2');
const hmm3 = document.getElementById('hi3');
const hmm4 = document.getElementById('hi4');
const loadingMessage = document.getElementById('loadingMessage');
let load = document.getElementsByClassName('loading-bar-container')[0];
let links = document.getElementsByClassName('link-container')[0];
let titl = document.getElementsByClassName('title')[0];
const urlParams = new URLSearchParams(window.location.search);
const startValue = urlParams.get('start');

// Function to simulate loading progress
function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2; // Adjust the increment value as needed
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      loadingMessage.textContent = 'Links Fetched...';
      loadingMessage.style.opacity =0;
      load.style.opacity = 0;
      links.style.opacity = 0.85;
    }
  }, 100); // Adjust the interval time as needed
}

// Call the simulateLoading function after the page has loaded
window.onload = simulateLoading;


fetch('links.json')
.then(response => response.json())
.then(data => {


  let series_array = data.filter(ele => {
    return ele.id == startValue;
});
series_array.forEach((elem, i) => {
 let {drive, mega, fitcher, katfile, other, title} = elem ;
 hmm.href = drive
 hmm.innerText = "1. [Google Drive]"
 titl.innerText = title
 hmm1.href = mega
hmm1.innerText = "2. [Mega]"
hmm2.href = fitcher
hmm2.innerText = "3. [Fitcher]"
hmm3.href = katfile
hmm3.innerText = "4. [Katfiles]"
hmm4.href = other
hmm4.innerText = "5. [Others]"


  // Use the data to populate your website content, create links, etc.
})})
.catch(error => {
  console.error('Error fetching data:', error);
});