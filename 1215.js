const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

console.dir(title);

//mouseenter === 마우스가 해당 위치에 올라감
//mouseleave === 마우스가 해당 위치 밖으로 내려감
