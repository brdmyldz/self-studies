import { formValidation } from './validation.js';
import { createCookies } from './cookies.js';

const submitter = document.getElementById("submit");
submitter.addEventListener("click", formSubmission);

function formSubmission(event) {
    event.preventDefault();
    
    if(!formValidation()){
        return false;
    }

    const form = document.getElementById("form");
    const formData = new FormData(form, submitter);

    createCookies(formData, 1);     // Set expirery to 1 day
    window.location.href = "./display.html";
}

