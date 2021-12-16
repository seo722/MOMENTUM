const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

//toggle ===
//const clickedClass = "clicked";
//if (h1.classList.contains(clickedClass)) {
//  h1.classList.remove(clickedClass);
//} else {
//  h1.classList.add(clickedClass);
//}
//toggle === classList에 내가 원하는 class가 있는지를 확인해서
//없으면 넣고 있으면 제거.
