window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  //tilføjer classen "pulse" til play-knappen
  document.querySelector("#bi").classList.add("pulse");
  document.querySelector("#bi").addEventListener("click", clickHandler);
}

//
function clickHandler() {
  console.log("clickAnimation");
  document.querySelector("#bi").classList.add("forsvind");
  document.querySelector("#bi").addEventListener("animationend", clickReset);
}

function clickReset() {
  console.log("clickReset");
  document.querySelector("#bi").classList = "";
  document.querySelector("#bi").offsetLeft;
  document.querySelector("#bi").firstElementChild.offsetLeft;

  document.querySelector("#bi").classList.add("pulse");
  document.querySelector("#bi").addEventListener("click", clickHandler);
}
