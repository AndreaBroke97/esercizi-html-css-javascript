// SELEZIONE ELEMENTI
const addMovieBtn = document.querySelector("header button");
// Cerca il primo <button> dentro <header>, Lo salva nella variabile addMovieBtn
const addModal = document.getElementById("add-modal"); // add modal è il riquadro che deve comparire
// prende l'elemento con id "add-modal" e lo salva nella variabile addModal
const backdrop = document.getElementById("backdrop"); //Prende lo sfondo scuro dietro la modale
// prende l'elemento con id "backdrop" e lo salva nella variabile backdrop
const cancelBtn = addModal.querySelector(".btn--passive"); //di solito è il bottone Cancel
// cerca il primo elemento con classe "btn--passive" dentro addModal e lo salva nella variabile cancelBtn

// FUNZIONE PER APRIRE LA MODALE
function openAddMovieModal() {
  addModal.classList.add("visible");
  backdrop.classList.add("visible");
  //classList.add("visible") aggiunge una classe CSS
  //serve per cambiare display, opacity, ecc.
}

// FUNZIONE PER CHIUDERE LA MODALE
function closeAddMovieModal() {
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
}

// APERTURA MODALE AL CLICK SUL BOTTONE
addMovieBtn.addEventListener("click", openAddMovieModal);

// CHIUSURA MODALE AL CLICK SU CANCEL
cancelAddMovieBtn.addEventListener("click", closeAddMovieModal);

// CHIUSURA MODALE CLICCANDO SULL'OVERLAY
backdrop.addEventListener("click", closeAddMovieModal);

// IMPEDISCE LA CHIUSURA SE CLICCHI DENTRO LA MODALE
addModal.addEventListener("click", function (event) {
  event.stopPropagation();
});