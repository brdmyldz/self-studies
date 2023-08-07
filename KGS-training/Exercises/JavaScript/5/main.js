import { formValidation } from './validation.js';
import { displayForm } from './display.js';

const submitter = document.getElementById("submit");
submitter.addEventListener("click", formSubmission);

function formSubmission(event) {
    event.preventDefault();
    
    if(!formValidation()){
        return false;
    }

    const form = document.getElementById("form");
    const formData = new FormData(form, submitter);
    displayForm(formData);
}

