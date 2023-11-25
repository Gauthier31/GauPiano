var numSec = 3
var maxSec = 5
document.getElementById("numSec").innerHTML = numSec

var nbPiano = 1
var maxNbPiano = 3
generated()

afficheSection()


document.addEventListener('keydown', (event) => {
    var name = event.key

    switch (name) {
        case 'Shift':
            afficherLettre();
            break;

        case 'ArrowLeft':
            flecheGauche()
            break;

        case 'ArrowRight':
            flecheDroite()
            break;

        case '+':
            btnAjout()
            break;

        case '-':
            btnSoustraction()
            break;

        default:
            find = search(name)

            if (find >= 0) {
                document.getElementById(BD[find][1]).classList.add("press");
                playSound(BD[find][2]);
            }
    }

}, false);

document.addEventListener('keyup', (event) => {
    var name = event.key

    switch (name) {
        case 'Shift':
            cacheLettre();
            break;

        default:
            find = search(name)

            if (find >= 0) {
                document.getElementById(BD[find][1]).classList.remove("press");
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

    for (i = 0; i < BD.length; i++) {
        if (BD[i][0].includes(key.toUpperCase())) {
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

    piano = document.getElementById("piano");
    piano.innerHTML = ""

    for (var i = 1; i <= nbPiano; i++) {
        piano.innerHTML +=
            `
        <div class="octave">
            <div class="row mix">
                <div id="DO#_` + i + `" class="TN" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>Z</p>
                        </div>
                        <p>DO#
                        </p>
                    </div>
                </div>
                <div id="RE#_` + i + `" class="TN" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>E</p>
                        </div>
                        <p>RE#
                        </p>
                    </div>
                </div>

                <div class="TN-NULL"></div>

                <div id="FA#_` + i + `" class="TN" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>T</p>
                        </div>
                        <p>FA#
                        </p>
                    </div>
                </div>
                <div id="SOL#_` + i + `" class="TN" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>Y</p>
                        </div>
                        <p>SOL#
                        </p>
                    </div>
                </div>
                <div id="LA#_` + i + `" class="TN" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>U</p>
                        </div>
                        <p>LA#
                        </p>
                    </div>
                </div>

                <div class="TN-NULL"></div>
            </div>

            <div class="row">
                <div id="DO_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>Q</p>
                        </div>
                        <p>DO</p>
                    </div>
                </div>
                <div id="RE_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>S</p>
                        </div>
                        <p>RE</p>
                    </div>
                </div>
                <div id="MI_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>D</p>
                        </div>
                        <p>MI</p>
                    </div>
                </div>
                <div id="FA_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>F</p>
                        </div>
                        <p>FA</p>
                    </div>
                </div>
                <div id="SOL_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>G</p>
                        </div>
                        <p>SOL</p>
                    </div>
                </div>
                <div id="LA_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>H</p>
                        </div>
                        <p>LA</p>
                    </div>
                </div>
                <div id="SI_` + i + `" class="TB" onmousedown="press(this)" onmouseup="dePress(this)">
                    <div class="info">
                        <div class="lettre">
                            <p>J</p>
                        </div>
                        <p>SI</p>
                    </div>
                </div>
            </div>

            <div class="numSection"><p>` + (numSec + i - 1) + `</p></div>
        </div>
        `;
    }
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function playSound(audioElement) {
    console.log(audioElement.src)

    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
}
