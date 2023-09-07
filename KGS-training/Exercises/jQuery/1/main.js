import { formValidation } from './validation.js';
import { createCookies } from './cookies.js';

$("#submit").click(function(event) {
    event.preventDefault();
    
    if(!formValidation()){
        return false;
    }

    const form = $("#form");
    const formData = new FormData(form, submitter);

    createCookies(formData, 1);     // Set expirery to 1 day
    window.location.href = "./display.html";
});

