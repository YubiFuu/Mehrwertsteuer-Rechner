const aufschlag = document.getElementById("mwst-auf");
const mwst19 = document.getElementById("mwst-19");
const textInput = document.getElementById("input-num");
const mwstBetrag = document.querySelector("h3");
const endWort = document.querySelector(".brutto-o-netto");
const endZahl = document.querySelector("h4");
const textInputLabel = document.getElementById("label-input");

function calcSteuer(event) {
    event.preventDefault();
    const numInput = Number(textInput.value);
    let x; //brutto oder netto
    let y; //steuersatz (7% oder 19%)
    let z; // die differenz zwischen textInput und x

    const defMwstSatz = () => {
        if (mwst19.checked) {
            y = 19;
        } else {
            y = 7;
        }
    };

    defMwstSatz();

    const plusOrMinus = () => {
        if (aufschlag.checked) {
            x = numInput + (numInput / 100) * y;
            endWort.innerHTML = "Bruttobetrag (Endpreis)";
        } else {
            x = numInput - (numInput / 100) * y;
            endWort.innerHTML = "Nettobetrag";
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
function changeNettoBruttoTag() {
    if (aufschlag.checked == true) {
        endWort.innerHTML = "Bruttobetrag (Endpreis)";
        textInputLabel.innerHTML = `<p>
        Nettobetrag (Preis ohne Mehrwertsteuer) in Euro
        <span>*</span>
    </p>`;
    } else {
        endWort.innerHTML = "Nettobetrag";
        textInputLabel.innerHTML = `<p>
        Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro
        <span>*</span>
    </p>`;
    }
    if (textInput.value != "") {
        calcSteuer(event);
    }
}
