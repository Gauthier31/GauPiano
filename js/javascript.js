var numSec = 3
var maxSec = 5
document.getElementById("numSec").innerHTML = numSec

var nbPiano = 1
var maxNbPiano = 3

var enregistrement = document.getElementById("enregistrement")
var next = true

var parametreBool = true;

// AZERTY par defaut
var clavier = 0

generated()
afficheSection()


document.addEventListener('keydown', (event) => {
    var name = event.code;

    switch (name) {
        case 'ShiftLeft':
            afficherLettre();
            break;

        case 'ArrowLeft':
            flecheGauche()
            break;

        case 'ArrowRight':
            flecheDroite()
            break;

        case 'ArrowUp':
            btnAjout()
            break;

        case 'ArrowDown':
            btnSoustraction()
            break;

        default:
            find = search(name)

            if (find >= 0) {
                document.getElementById(TOUCHES[find][2]).classList.add("press");
                if (next) {
                    next = false
                    playSound(TOUCHES[find][3]);
                    addEnregistrement(TOUCHES[find][2])
                }
            }
    }

}, false);

document.addEventListener('keyup', (event) => {
    var name = event.code

    switch (name) {
        case 'ShiftLeft':
            cacheLettre();
            break;

        default:
            find = search(name)

            if (find >= 0) {
                document.getElementById(TOUCHES[find][2]).classList.remove("press");
                stopSound(TOUCHES[find][3])
                next = true;
            }
    }

}, false);

function press(t) {
    t.classList.add("press")
}

function dePress(t) {
    t.classList.remove("press")
}

function search(key) {

    find = -1

    for (i = 0; i < TOUCHES.length && find == -1; i++) {
        if (TOUCHES[i].includes(key)) {
            find = i
        }
    }

    return find
}

function afficherLettre() {
    var classLettre = document.getElementsByClassName("lettre");
    for (i = 0; i < classLettre.length; i++) {
        classLettre[i].classList.add("lettreAffiche");
    }
}

function cacheLettre() {
    var classLettre = document.getElementsByClassName("lettreAffiche");

    for (i = 0; classLettre.length > 0;) {
        classLettre[i].classList.remove("lettreAffiche");
    }
}

function flecheGauche() {
    if (numSec > 1) {
        numSec--
        generated()
        statusBtn();
    }
    afficheSection()
}

function flecheDroite() {
    if (numSec + nbPiano - 1 < maxSec) {
        numSec++
        generated()
        statusBtn();
    }
    afficheSection()
}

function btnAjout() {
    if (nbPiano < maxNbPiano) {
        nbPiano++
        generated()
        statusBtn()
    }
    afficheSection()
}

function btnSoustraction() {
    if (nbPiano > 1) {
        nbPiano--
        generated()
        statusBtn()
    }
    afficheSection()
}

function statusBtn() {

    // btn ←
    if (numSec == 1) {
        document.getElementsByClassName("btnFleche")[0].classList.add("btnNull")
    } else {
        document.getElementsByClassName("btnFleche")[0].classList.remove("btnNull")
    }
    // btn →
    if (numSec + nbPiano - 1 == maxSec) {
        document.getElementsByClassName("btnFleche")[1].classList.add("btnNull")
    } else {
        document.getElementsByClassName("btnFleche")[1].classList.remove("btnNull")
    }

    // btn -
    if (nbPiano == 1) {
        document.getElementsByClassName("btnSoustraction")[0].classList.add("btnNull")
    } else {
        document.getElementsByClassName("btnSoustraction")[0].classList.remove("btnNull")
    }

    // btn +
    if (numSec + nbPiano - 1 == maxSec) {
        document.getElementsByClassName("btnAjout")[0].classList.add("btnNull")
    } else {
        document.getElementsByClassName("btnAjout")[0].classList.remove("btnNull")
    }
}

function afficheSection() {
    if (nbPiano == 1) {
        document.getElementById("numSec").innerHTML = numSec
    } else {
        document.getElementById("numSec").innerHTML = numSec + " - " + (numSec + nbPiano - 1)
    }
}

function generated() {

    piano = "";

    for (var i = 1; i <= nbPiano; i++) {

        piano += `
        <div class="octave">
                <div class="row mix">`;

        for (var j = 0; j < 7; j++) {

            indice = (i - 1) * 14 + j;

            if (TOUCHES[indice][2] == "") {
                piano += `<div class="TN-NULL"></div>`
            } else {
                piano += `
                    <div id="` + TOUCHES[indice][2] + `" class="TN" onmousedown="press(this)" onmouseup="dePress(this)">
                        <div class="info">
                            <div class="lettre">
                                <p>` + TOUCHES[indice][1][clavier] + `</p>
                            </div>
                            <p class="note">` + TOUCHES[indice][2].slice(0, TOUCHES[indice][2].length - 2) + `</p>
                        </div>
                    </div>`;
            }
        }

        piano += `
        </div>

        <div class="row">
        `;

        for (j; j < 14; j++) {

            indice = (i - 1) * 14 + j;

            piano += `
                <div id="` + TOUCHES[indice][2] + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>` + TOUCHES[indice][1][clavier] + `</p>
                        </div>
                        <p>` + TOUCHES[indice][2] + `</p>
                    </div>
                </div>`;
        }

        piano +=
            `</div>
            
            <div class="numSection">
                <p>` + (numSec + i - 1) + `</p>
            </div>
        </div>`;
    }

    document.getElementById("piano").innerHTML = piano;
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function playSound(audioElement) {
    //console.log(audioElement)

    audioElement.play();
}

function stopSound(audioElement) {
    //console.log(audioElement)

    audioElement.pause();
    audioElement.currentTime = 0;
}

function addEnregistrement(txt) {
    if (enregistrement.innerHTML !== "") {
        enregistrement.innerHTML += " + ";
    }
    enregistrement.innerHTML += "<span>" + txt.slice(0, txt.length - 2); + "</span>";
}


function resetEnregistrement() {
    enregistrement.innerHTML = "";
}

function parametre(obj) {

    parametreBloc = document.getElementById("parametre")

    if (parametreBool) {
        parametreBool = false;
        parametreBloc.style.height = "0px"
        obj.classList.value = obj.classList.value.replace("up", "down")
    } else {
        parametreBool = true;
        parametreBloc.style.height = "150px"
        obj.classList.value = obj.classList.value.replace("down", "up")
    }
}