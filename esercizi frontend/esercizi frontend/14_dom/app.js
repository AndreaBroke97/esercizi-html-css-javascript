firstItem = document.querySelector('li');

//parentNode ti permette di risalire di un livello nel DOM, cioè prendere il genitore di un elemento.
const li = document.querySelector('.list-item');
console.log(li.parentNode); // → il <ul> che contiene i <li>
/*Hai due liste <ul> e un bottone.
Supponiamo che tu voglia:
- cliccare su un <li>
- risalire al suo <ul>
- magari aggiungere un nuovo elemento proprio a quel <ul>
*/

// Seleziono tutti i <li> della pagina
const items = document.querySelectorAll('li');

//////////////////////////////////////////////////////

items.forEach(li => {
  li.addEventListener('click', function () {
    const parent = li.parentNode; // risalgo al <ul>
    console.log('Il genitore è:', parent);

    // Aggiungo un nuovo elemento alla lista del genitore
    const nuovo = document.createElement('li');
    nuovo.textContent = 'Nuovo elemento aggiunto con parentNode';
    parent.appendChild(nuovo);
  });
});
/*- Clicchi su un <li>
- parentNode risale al <ul> che lo contiene
- Viene creato un nuovo <li>
- Il nuovo <li> viene aggiunto proprio a QUELLA lista
Funziona sia per la prima lista che per la seconda, perché parentNode prende sempre il genitore corretto.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PARENT ELEMENT
const item = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement; // prende il <ul>
    console.log(parent);
  });
});

/*Cosa succede:
- clicchi un <li>
- JavaScript prende il suo genitore HTML (il <ul>)
- lo stampa in console
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*closest() serve per:
👉 risalire la gerarchia finché non trova un elemento che corrisponde a un selettore CSS.
È come dire:
“Parti da questo elemento e sali finché non trovi un <ul>… oppure un <div>… oppure un .classe”.
È più intelligente di parentNode perché non si ferma al primo genitore, ma continua a salire finché trova quello giusto.
*/
const items2 = document.querySelectorAll('li'); 

items2.forEach(item => {
  item.addEventListener('click', () => {
    const ul = item.closest('ul'); // trova il <ul> più vicino
    console.log(ul);
  });
})
/* - clicchi un <li>
- closest('ul') risale finché trova un <ul>
- lo stampa in console
È più “furbo” di parentElement, perché se il <li> fosse dentro altri contenitori, li attraverserebbe finché trova il tag richiesto.
*/

