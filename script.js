const errornumber = document.querySelector(".error_number");
errornumber.style.display = "none";
const errormonth = document.querySelector(".error_month");
errormonth.style.display = "none";
const errorcvv = document.querySelector(".error_cvv");
errorcvv.style.display = "none";
const thank = document.querySelector(".thank");
thank.style.display = "none";

const rightside = document.querySelector(".right");


const main_name = document.querySelector(".main_name");
const main_number = document.querySelector(".main_number");
const main_month = document.querySelector(".main_month");
const main_year = document.querySelector(".main_year");
const input_cvc = document.querySelector(".input_cvc");
const btn = document.querySelector(".btn");

const card_number = document.querySelector(".card_number");
const card_name = document.querySelector(".card_name");
const card_month = document.querySelector(".card_month");
const card_year = document.querySelector(".card_year");
const card_cvv = document.querySelector(".card_cvv");

function updateCardName() {
    card_name.textContent = main_name.value;
}

function updateCardMonth() {
    card_month.textContent = main_month.value;
}

function updateCardYear() {
    card_year.textContent = main_year.value;
}

function updateCardCvv() {
    card_cvv.textContent = input_cvc.value;
}

function updateCardNumber() {
    const inputValue = main_number.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue = formatCardNumber(inputValue);
    card_number.textContent = formattedValue;
}

function formatCardNumber(value) {
    value = value.replace(/\D/g, '').slice(0, 16);
    const parts = [];
    for (let i = 0; i < value.length; i += 4) {
        parts.push(value.slice(i, i + 4));
    }

    return parts.join(' ');
}

function isIntegerInput(input) {
    return /^\d+$/.test(input);
}

function isEmpty(input) {
    return input.trim().length === 0;
}

btn.addEventListener("click", function (event) {
    event.preventDefault();
    const main_numbervalue = main_number.value;
    const main_monthvalue = main_month.value;
    const main_cvvvalue = input_cvc.value;
    const main_yearvalue = main_year.value;

    if (!isIntegerInput(main_numbervalue)) {
        errornumber.style.display = "block";
        main_number.style.border = "2px solid red";
    } else {
        errornumber.style.display = "none";
        main_number.style.border = '2px solid hsl(278, 68%, 11%)';
    }

    if (isEmpty(main_monthvalue) || isEmpty(main_yearvalue)) {
        main_month.style.border = '2px solid red';
        main_year.style.border = '2px solid red';
        errormonth.style.display = 'block';
    } else {
        main_month.style.border = '2px solid hsl(278, 68%, 11%)';
        main_year.style.border = '2px solid hsl(278, 68%, 11%)';
        errormonth.style.display = 'none';

    }

    if (isEmpty(main_cvvvalue)) {
        input_cvc.style.border = '2px solid red';
        errorcvv.style.display = "block";
    } else {
        input_cvc.style.border = '2px solid hsl(278, 68%, 11%)';
        errorcvv.style.display = 'none';
    }
    if (isIntegerInput(main_numbervalue) && !isEmpty(main_monthvalue) && !isEmpty(main_yearvalue) && !isEmpty(main_cvvvalue)) {
        // Hide all other classes and display the "thank" class
       
        rightside.style.display = 'none';
        thank.style.display = "block";
    }
});

main_name.addEventListener("input", updateCardName);
main_month.addEventListener("input", updateCardMonth);
main_year.addEventListener("input", updateCardYear);
input_cvc.addEventListener("input", updateCardCvv);
main_number.addEventListener("input", function () {
    updateCardNumber();
});
