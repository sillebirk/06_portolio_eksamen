window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  //   tilføjer classen "pulse" og event der fører hen til en funktion når man klikker
  document.querySelector("#bi").classList.add("pulse");
  document.querySelector("#bi").addEventListener("click", clickHandler);
}

// Når der bliver klikket starter animationen "click", som er en class der er blevet tilføjet
function clickHandler() {
  console.log("clickAnimation");
  document.querySelector("#bi").classList.add("forsvind");
  //   lytter efter om animationen er færdig
  document.querySelector("#bi").addEventListener("animationend", clickReset);
}

function clickReset() {
  console.log("clickReset");
  //    fjerner alle classes fra html elementet, force reflow (for at computeren når at se at classen er fjernet)
  document.querySelector("#bi").classList = "";
  document.querySelector("#bi").offsetLeft;
  document.querySelector("#bi").firstElementChild.offsetLeft;
  //    tilføjer classen igen, som nu starter forfra
  document.querySelector("#bi").classList.add("pulse");
  document.querySelector("#bi").addEventListener("click", clickHandler);
}
