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

// 1 print the numbers between 1 to 100 with a cicle for ->from i = 0 to i < 100 with i++ 3 buzz 5 fizz 3 & 5 fizz buzz...

for (let i = 0; i <= 100; i++){
    let output = '';

    if(i % 3 === 0){
        output = 'fizz';
    }
    else if(i % 5 === 0){
        output = 'buzz';
    }

    else if(output === ''){
        output = i;
    }
    console.log(output);
}

// 2 here I create a div with class container that allow me to put the output inside of it after with append...
// create container
const container = document.getElementById("my-container");

for (let i = 0; i <= 100; i++){
    let output = document.createElement("p");

    if (i % 3 === 0){
        output = 'fizz';
    }
    else if(i % 5 === 0){
        output = 'buzz';
    }
    else if(output === ''){
        output = i;
    }
    container.appendChild(output);
}

// error
