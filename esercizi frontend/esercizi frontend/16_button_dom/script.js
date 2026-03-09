const button = document.getElementById("add-movie"); //Prendiamo gli elementi
const box = document.getElementById("movie-box"); //Prendiamo gli elementi

button.addEventListener("click", () => { //“Quando clicco il bottone…”
  if (box.style.display === "none" || box.style.display === "") { 
    //Se è nascosto → mostralo          altrimenti nascondilo
    box.style.display = "block"; //“Mostra l’elemento”
  } else {
    box.style.display = "none"; //“Nascondi l’elemento”
  }
});