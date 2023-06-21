//your JS code here. If required.
const time = document.getElementById("timer");
// const date = new Date();
// const timer = date.toLocaleTimeString();
// setInterval(updateTimer, 1000);

const date = new Date();
const currentDate = date.toDateString();

function updateTimer() {
      const date = new Date();
      const timer = date.toLocaleTimeString();
      
      // document.getElementById("timer").textContent = timer;
    }

    // Call updateTimer function every second
    setInterval(updateTimer, 1000);
time.innerText = currentDate;
// time.innerText = timer;