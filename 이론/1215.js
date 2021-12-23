const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
  console.log("title was clicked!");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("sos! no Wifi!");
}

function handleWindowOnline() {
  alert("nope, it's okay!");
}

//h1.addEventListener("click", handleh1Click);
//===
h1.onclick = handleh1Click;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//addEventListener를 쓰면 뒤에서 removeEventListener로 지울 수 있음
//mouseenter === 마우스가 해당 위치에 올라감
//mouseleave === 마우스가 해당 위치 밖으로 내려감

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
