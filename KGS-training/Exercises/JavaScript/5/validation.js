function formValidation() {

    const firstname = document.getElementById("name");
    const lastname = document.getElementById("surname");
    const course = document.getElementById("course");
    const timePeriod = document.getElementById("period");
    const message = document.getElementById("message");
    
    if(!nameValidation(firstname)) {
        message.innerHTML = "Invalid First Name entry! Format should be letter only, and \
                            the length of the entry must be between 3 and 10."
        return false;
    }

    if(!nameValidation(lastname)) {
        message.innerHTML = "Invalid Last Name entry! Format should be letter only, and \
                            the length of the entry must be between 3 and 10."
        return false;
    }

    if(!emailValidation()) {
        message.innerHTML = "Invalid Email entry! Make sure you entered a valid email format, and \
                            the length of the email must be between 6 and 200."
        return false;
    }

    if(!phoneValidation()) {
        message.innerHTML = "Invalid Phone entry! Make sure your entry follows the format +91-XXX-XXX-XXXX"
        return false;
    }

    if (!textareaValidation()) {
        message.innerHTML = "Invalid Address entry! Valid characters are letters, \
                            whitespace and some special characters (,.=':\"-). Length \
                            should be between 5 and 500 characters.";
        return false;
    }

    if(!selectboxValidation(course)){
        message.innerHTML = "Invalid Course entry! Please select an option from the list.";
        return false;
    }

    if (!checkboxValidation()) {
        message.innerHTML = "Invalid Subjects entry! Minimum of 2 subjects must be selected."
        return false;
    }

    if(!selectboxValidation(timePeriod)){
        message.innerHTML = "Invalid Time Period entry! Please select an option from the list.";
        return false;
    }

    if(!dateValidation()){
        message.innerHTML = "Invalid Submission Date entry! Please select a valid date.";
        return false;
    }

    message.innerHTML = "Submission Successful!"
    return true
}

function nameValidation(inputObject) {
    const pattern = /^[A-z]{3,10}$/;

    if (pattern.test(inputObject.value)){
        return true;
    }
    return false;
}

function emailValidation() {
    const pattern = /^(?=.{6,200}$)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const emailText = document.getElementById("email").value;

    if (pattern.test(emailText)){
        return true;
    }
    return false;
}

function phoneValidation() {
    const pattern = /^\+91-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const phoneText = document.getElementById("phone").value;

    if (pattern.test(phoneText)){
        return true;
    }
    return false;
}

function textareaValidation() {
    const pattern = /[^A-z-,:='.\s]/;     // Any character except permitted characters
    const addressText = document.getElementById("address").value.trim();
    const addressLength = addressText.length;

    if (pattern.test(addressText) || addressLength < 4 || addressLength > 500){
        return false;
    }
    return true;
}

function selectboxValidation(inputObject) {
    if(inputObject.value === "") {
        return false;
    }
    return true;
}

function checkboxValidation() {
    let checkedCount = 0;
    const subjects = document.getElementsByClassName("subjects");

    for(let subject of subjects) {
        if (subject.checked) {
            ++checkedCount;
        }
    }

    if(checkedCount < 2) {
        return false;
    }
    return true;
}

function dateValidation() {
    const dateValue = document.getElementById("date").value;
    
    if(dateValue === "") {
        return false;
    }
    return true;
}

export {
    formValidation
};