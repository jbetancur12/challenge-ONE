const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");
const input = document.getElementById("input");
const output = document.getElementById("output");
const messageBox = document.getElementById("message")
const noMessageBox = document.getElementById("noMessage")

const dictionary = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "u": "ufat",
    "o": "ober",
}

const encrypt = function (e) {
    e.preventDefault();

    let inputText = input.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

    if (inputText.length == 0) {
        alert("Inserte algun texto")
        return
    }


    const encode = inputText.replace(/[aeiou]/g, m => dictionary[m])

    noMessageBox.style.display = "none"
    messageBox.style.display = "block"

    output.innerHTML = encode
};

let decrypt = function (e) {
    e.preventDefault();

    let inputText = input.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    inputText = inputText
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u")
        .replaceAll("ober", "o");

    output.innerHTML = inputText;
};

let copy = function () {
    navigator.clipboard.writeText(output.innerHTML);
};



btnEncrypt.addEventListener("click", encrypt);

btnDecrypt.addEventListener("click", decrypt);

btnCopy.addEventListener("click", copy);

btnClear.addEventListener("click", clear);