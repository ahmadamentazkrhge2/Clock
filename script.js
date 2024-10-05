let clock = document.getElementById("clock");

function update() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  hours = hours > 12 ? hours - 12 : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.innerHTML = hours+ " : " + minutes+ " : " + seconds;
}

setInterval(update, 1000);
update();

