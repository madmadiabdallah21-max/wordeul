"use strict";

const randomWordBtn = document.querySelector("#randomBtn");
const formulaire = document.querySelector(".boxInt");

function choisirMotRandom() {
    const wordFromDict = dict[Math.floor(Math.random() * dict.length)];
    // @ts-ignore
    document.querySelector("#motCible").value = wordFromDict;
}


function clearForm() {
    document.querySelector("#motCible").value = "";
    document.querySelector("#nTentatives").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    randomWordBtn.addEventListener("click", () => {
        choisirMotRandom();
    });
    document.querySelector("#gameForm").addEventListener("submit", function(e) {
        e.preventDefault();

        if (!(e.target instanceof HTMLFormElement)) {
            throw Error("Unexpected");
        }
        const formData = new FormData(e.target);
        const nTentatives = formData.get("nTentatives");
        // @ts-ignore
        targetWord = formData.get("motCible").toUpperCase();
        // @ts-ignore
        initGame(parseInt(nTentatives, 10), targetWord);
        // @ts-ignore
        formulaire.style.display = "none";
        document.querySelector("#ad").classList.add("right");
    });
});
