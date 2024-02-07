const num1Inp = document.querySelector("#num1")
const num2Inp = document.querySelector("#num2")
const plusBtn = document.querySelector("#add")
const minusBtn = document.querySelector("#subtract")
const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")
const acBtn = document.querySelector("#clear")

const utskriftEl = document.querySelector("#utskrift")

plusBtn.onclick = () => {
    const tall1 = num1Inp.value;
    const tall2 = num2Inp.value;
    const result = parseInt(num1Inp.value) + parseInt(num2Inp.value);

    utskriftEl.value = "";
    utskriftEl.innerHTML += (`${tall1} + ${tall2} = ${result}<br>`);
    num1Inp.value = "";
    num2Inp.value = "";
}

minusBtn.onclick = () => {
    const tall1 = num1Inp.value;
    const tall2 = num2Inp.value;
    const result = parseInt(num1Inp.value) - parseInt(num2Inp.value);

    utskriftEl.value = "";
    utskriftEl.innerHTML += (`${tall1} - ${tall2} = ${result}<br>`);
    num1Inp.value = "";
    num2Inp.value = "";
}

multiplyBtn.onclick = () => {
    const tall1 = num1Inp.value;
    const tall2 = num2Inp.value;
    const result = parseInt(num1Inp.value) * parseInt(num2Inp.value);

    utskriftEl.value = "";
    utskriftEl.innerHTML += (`${tall1} * ${tall2} = ${result}<br>`);
    num1Inp.value = "";
    num2Inp.value = "";
}

divideBtn.onclick = () => {
    const tall1 = num1Inp.value;
    const tall2 = num2Inp.value;
    const result = parseInt(num1Inp.value) / parseInt(num2Inp.value);

    utskriftEl.value = "";
    utskriftEl.innerHTML += (`${tall1} / ${tall2} = ${result}<br>`);
    num1Inp.value = "";
    num2Inp.value = "";
}

acBtn.onclick = () => {
    utskriftEl.value = "";
    utskriftEl.innerHTML = "";
    num1Inp.value = "";
    num2Inp.value = "";
}