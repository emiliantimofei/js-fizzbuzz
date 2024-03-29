// *Consegna:*
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// *Consigli del giorno:*
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// *BONUS 1:*
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// *BONUS 2:*
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


//bonus 2

const container = document.getElementById("my-container");
for (let i = 1; i <= 100; i++){
    const box = document.createElement("div");

    let output = "";
    if(i % 3 === 0 && i % 5 === 0){
        output = 'fizzbuzz'
        box.classList.add('box-1');
        box.classList.add('in-common');
    } else if(i % 5 === 0){
        output = 'buzz';
        box.classList.add('box-2');
        box.classList.add('in-common');
    } else if(i % 3 === 0){
        output = 'fizz';
        box.classList.add('box-3');
        box.classList.add('in-common');
    } else{
        output = i;
        box.classList.add('box-4');
        box.classList.add('in-common');
    }

    console.log(output);

    box.innerHTML = output;
    container.appendChild(box);
}

