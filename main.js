let pswrd = document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');

let upperCase = document.getElementById('upper');
let digit = document.getElementById('num');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

function checkPassword(data) {
    // javascript regular pattern
    const upper = new RegExp('(?=.*[A-Z])');
    const num= new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const Length = new RegExp('(?=.{8,})');

    // uppercase validation check
    if(upper.test(data)) {
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }

     // Number validation check
    if(num.test(data)) {
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }

    // Special character validation check
    if(special.test(data)) {
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }

    // Length validation check
    if(Length.test(data)) {
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }
}


// Show and hide password
toggleBtn.addEventListener("click", () => {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else {
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
})