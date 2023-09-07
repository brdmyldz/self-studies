import { getCookie } from './cookies.js';

const submissionContainer = document.getElementById("submission");

function displayForm(){
    // Create header
    const header = document.createElement("h2");
    header.innerHTML = "Submitted Information";
    submissionContainer.appendChild(header);

    generateRows("First Name");
    generateRows("Last Name");
    generateRows("Email");
    generateRows("Phone");
    generateRows("Address");
    generateRows("Course");
    generateRows("Subjects");
    generateRows("Time Period");
    generateRows("Submission Date");
}

function generateRows(cookieName){
    let cookieValue = getCookie(cookieName);
    if(cookieValue !== ""){
        const p = document.createElement("p");
        p.innerHTML = `<strong>${cookieName}:</strong> ${cookieValue}`;
        submissionContainer.appendChild(p);
    }
    // Could add else statement to throw and error but it's out of scope of this exercise
}

displayForm()