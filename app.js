const clockTitle = document.querySelector("#x-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  const difference = new Date(xmasDay - now);

  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}
getTime();
setInterval(getTime, 1000);
//내가 한거 ㅋ
//const xClock = document.querySelector("#x-clock");

//function getClock() {
//const xMas = new Date("December 25, 2021 00:00:00");
//const now = new Date();
//const days = xMas.getDay() - now.getDay() - 1;
//const hours = 23 - now.getHours();
// const minutes = 59 - now.getMinutes();
//const seconds = 59 - now.getSeconds();
// xClock.innerText = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
//}

//getClock();
//setInterval(getClock, 1000);
