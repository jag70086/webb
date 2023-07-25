document.addEventListener('DOMContentLoaded', function () {
    const timerButton = document.getElementById('timerButton');
    let timerInterval;
  
    timerButton.addEventListener('click', function () {
      let remainingTime = 30;
      timerButton.disabled = true;
      timerButton.textContent = `Please wait ${remainingTime} seconds`;
  
      timerInterval = setInterval(function () {
        remainingTime--;
  
        if (remainingTime > 0) {
          timerButton.textContent = `Please wait ${remainingTime} seconds`;
        } else {
          clearInterval(timerInterval);
          timerButton.textContent = 'Continue';
          timerButton.disabled = false;
  
          // Redirect to another page after the timer finishes
          window.location.href = 'https://www.movies4wiz.online/ap/n.html'; // Replace this URL with your desired page URL
        }
      }, 1000);
    });
  });
  