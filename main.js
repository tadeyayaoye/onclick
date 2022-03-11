console.info('Hello World !');

let compteur = 0;
let firstclick = true;
let play = true;
let chronos = 30;
let largeur = window.innerWidth;
let longeur = window.innerHeight;
console.log("largeur: " + largeur, "longeur: " + longeur);

// Changement du fond de la box2
let box2 = document.querySelector(".box2");
box2.style.background = "red";

// cahngement de couleurs des textes
// dans chaque boxes
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.style.color = "white";
});

box2.addEventListener('click', (event) => {
    if (play) {
        if (firstclick) {
            firstclick = false;
            setInterval(setTime, 1000);
        }
        
        compteur += 1;
        console.log('nombre de click: ', compteur);
        let x = 0;
        let y = 0;
        
        do {
            x = Math.floor(Math.random() * (largeur - 0) + 0);
            console.log(largeur, x);
        } while(x > largeur);

        do {
            y = Math.floor(Math.random() * (longeur - 0) + 0);
            console.log(longeur, y);
        } while(y > longeur);
        
        console.log("longeur:" + x, "largeur: " + y);

        event.target.style.top = y + "px";
        event.target.style.left = x + "px";
    }
});


function setTime () {
    if (play) {
        chronos--;

        if (chronos <= 10) {
            document.querySelector('.time').style.color = "red";
        }

        if (chronos <= 0) {
            play = false;
        }

        document.querySelector('.time').innerHTML = '' + chronos;
    } else {
        document.querySelector('.time').style.color = "green";
        document.querySelector('.time').innerHTML = "Vous avez cliquez: " + compteur + " fois";
        box2.style.display = "none";
    }
}