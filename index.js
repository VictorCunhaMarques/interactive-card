const inputNumber = document.querySelector('#input-card-number');
const inputName = document.querySelector('#input-card-name');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCvc = document.querySelector('#input-cvc');
const submit = document.querySelector("#form-btn");
const continua = document.querySelector("#continue-btn");

const name = document.querySelector('#card-name');
const data = document.querySelector('#card-exp');
const number = document.querySelector('#card-number');
const cvc = document.querySelector('#card-cvc');

function updateData() {
    const month = inputMonth.value.padStart(2, '0');
    const year = inputYear.value.padStart(2, '0');

    if(month && year) {
        data.textContent = `${month}/${year}`;
    } else {
        data.textContent = '00/00';
    }
}

inputName.addEventListener("input", () => {
    name.textContent = inputName.value.toUpperCase() || "JANE APPLESEED";
})

inputNumber.addEventListener("input", () => {
    number.textContent = inputNumber.value;
})

inputMonth.addEventListener("input", updateData);
inputYear.addEventListener("input", updateData);

inputCvc.addEventListener("input", () => {
    cvc.textContent = inputCvc.value.padStart(3, '0');
})

submit.addEventListener("click", (e) => {
    e.preventDefault();

    if(inputNumber.value && inputName.value && inputMonth.value && inputYear.value && inputCvc.value){
        const form = document.querySelector("#form-section");
        const complete = document.querySelector("#complete-section");
        
        complete.classList.toggle('hidden');
        form.classList.toggle('hidden');
    }
    else{
        if(!inputNumber.value) {
            const verifyNumber = document.querySelector('#verify-number');
            verifyNumber.classList.toggle('hidden');
        }
        if(!inputName.value) {
            const verifyName = document.querySelector('#verify-name');
            verifyName.classList.toggle('hidden');
        }
        if(!inputMonth.value || !inputYear.value) {
            const verifyDate = document.querySelector('#verify-date');
            verifyDate.classList.toggle('hidden');
        }
        if(!inputCvc.value) {
            const verifyCvc = document.querySelector('#verify-cvc');
            verifyCvc.classList.toggle('hidden');
        }
    }
})

continua.addEventListener("click", () => {
    location.reload();

    const form = document.querySelector("#form-section");
    const complete = document.querySelector("#complete-section");
    
    complete.classList.toggle('hidden');
    form.classList.toggle('hidden');
})