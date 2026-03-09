
//Esercizio 1: cambiare il testo di un elemento con getElementById
//const titolo = document.getElementById('titolo');
//titolo.textContent = 'Testo cambiato con JavaScript';

/* - const titolo = ... → sto creando una “variabile” 
che contiene il riferimento all’elemento <h1>
- document.getElementById('titolo') → sto dicendo: 
“vai nella pagina (document) e prendi l’elemento che ha id = 'titolo'”
- titolo.textContent = '...' → cambio il testo dentro l’<h1>
 */ 

//Esercizio 2: cambiare il colore del testo
//titolo.style.color = 'red';
/* Ora:
- titolo.style → accedo allo stile inline dell’elemento
- .color = 'red' → imposto il colore del testo a rosso
Ricarica la pagina: il testo dovrebbe essere rosso.
 */

//🟦 Esercizio 3: cambiare il testo cliccando un bottone
/* 🎯 Obiettivo
- Prendere un elemento con getElementById
- Prendere un bottone con getElementById
- Quando clicchi il bottone → cambia il testo dell’elemento
 */
//const titolo = document.getElementById('titolo');
//const bottone = document.getElementById('cambia');

//bottone.addEventListener('click', function () {
// titolo.textContent = 'Hai cliccato il bottone!';
//});
/* Cosa succede
- Il browser carica la pagina
- Tu vedi il titolo: Testo iniziale
- Clicchi il bottone
- Il testo diventa: Hai cliccato il bottone!
 */

//🟦 ESERCIZIO 4 👉 Aggiungere un nuovo elemento alla pagina cliccando un bottone


