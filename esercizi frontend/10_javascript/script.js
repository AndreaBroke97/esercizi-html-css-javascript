function toggleColor() {
    const color = document.querySelector('.color'); //seleziono il primo elemento del DOM con la classe color e lo salva nella variabile color
    if(!box) return; // se box non esiste (null o undefined), esce dalla funzione
     color.classList.toggle('active'); //toglie o aggiunge la classe active all'elemento color
}   
    

//espone la funzione in modo che l'onclick inline possa invocarla
window.toggleColor = toggleColor; //rende la funzione accessibile globalmente 


/*
window è l'oggetto globale nel contesto del browser, rappresenta la finestra/scheda del browser stessa.

scope globale:
le proprietà di window sono accessibili ovunque;
se definisci window.toggleColor, puoi chiamare toggleColor() anche da HTML inline (onclick="toggleColor()") e dalla console
inline handler: gli attributi HTML come onclick cercano funzioni sul window; esporla li garantisce che il nome sia risolto.
*/

