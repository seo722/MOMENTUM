const widthValue1 = "width1";
const widthValue2 = "width2";
const body = document.querySelector("body");

function windowColor() {
  const WI = window.innerWidth;
  function remove(removeClass) {
    body.classList.remove(removeClass);
  }
  function add(addClass) {
    body.classList.add(addClass);
  }
  if (WI < 200) {
    remove(widthValue1);
    remove(widthValue2);
  } else if (200 <= WI && WI <= 300) {
    add(widthValue1);
    remove(widthValue2);
  } else if (WI > 300) {
    add(widthValue2);
  }
}

window.addEventListener("resize", windowColor);
