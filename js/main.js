const aufschlag = document.getElementById("mwst-auf");
const abzug = document.getElementById("mwst-ab");
const mwst19 = document.getElementById("mwst-19");
const mwst7 = document.getElementById("mwst-7");
const textInput = document.getElementById("input-num");
const mwstBetrag = document.querySelector("h3");
const endWort = document.querySelector(".brutto-o-netto");
const endZahl = document.querySelector("h4");

function calcSteuer(event) {
    event.preventDefault();

    const numInput = Number(textInput.value);

    let x; //brutto oder netto
    let y; //steuersatz (7 oder 19%)
    let z; // die differenz zwischen textInput und x
    const defMwstSatz = () => {
        if (mwst19.checked == true) {
            y = 19;
        } else if (mwst7.checked == true) {
            y = 7;
        } else {
            alert(
                "Error: Du hast nicht angegeben wie hoch der Steuersatz ist."
            );
        }
    };
    defMwstSatz();

    const plusOrMinus = () => {
        if (aufschlag.checked == true) {
            x = numInput + (numInput / 100) * y;
            endWort.innerHTML = "Bruttobetrag (Endpreis)";
        } else if (abzug.checked == true) {
            x = numInput - (numInput / 100) * y;
            endWort.innerHTML = "Nettobetrag";
        } else {
            alert(
                "Error: Du hast nicht ausgewählt, ob die Mehrwertsteuer aufgeschlagen oder abgezohgen werden soll."
            );
        }
    };

    plusOrMinus();
    x = Math.round(x * 100) / 100;
    endZahl.innerHTML = `${x} €`;

    const difInputOutput = () => {
        z = Math.abs(Math.round((x - numInput) * 100) / 100);
    };
    difInputOutput();
    mwstBetrag.innerHTML = `${z} €`;
}