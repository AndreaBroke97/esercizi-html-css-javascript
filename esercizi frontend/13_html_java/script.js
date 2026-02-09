// 1. Selezioniamo gli elementi usando il loro ID
const inputNome = document.getElementById('nomeUtente');
const bottone = document.getElementById('bottoneSaluta');
const output = document.getElementById('messaggio');

// 2. Aggiungiamo un "ascoltatore" che reagisce al click del mouse
bottone.addEventListener('click', function() {
    
    // 3. RECUPERO: Prendiamo il valore scritto dentro l'input
    let nome = inputNome.value;
    
    // 4. ELABORAZIONE: Trasformiamo il testo (es. tutto in maiuscolo)
    let nomeMaiuscolo = nome.toUpperCase();
    
    // 5. MOSTRA: Inseriamo il risultato nel paragrafo HTML
    if (nome === "") {
        output.innerText = "Per favore, inserisci un nome!";
    } else {
        output.innerText = "Ciao, " + nomeMaiuscolo + "! Benvenuto nel codice.";
    }
});