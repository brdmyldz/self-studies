function displayForm(formData) {
    // Clear previous submitted information
    const submissionContainer = document.getElementById("submission");
    submissionContainer.innerHTML = "";

    // Create header
    const header = document.createElement("h2");
    header.innerHTML = "Submitted Information";
    submissionContainer.appendChild(header);

    let subjectsValue = "";
    for (const [key, value] of formData) {
        // Special case for subjects since we need to list subjects in one line
        if(key == "Subjects"){
            subjectsValue += value + ", ";
            continue
        }

        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        submissionContainer.appendChild(p)
    }

    // Chop off the extra ", " from the end
    subjectsValue = subjectsValue.substring(0, subjectsValue.length - 2);
    // Generate Subjects and insert into 7th position
    const p = document.createElement("p");
    p.innerHTML = `<strong>Subjects:</strong> ${subjectsValue}`;
    submissionContainer.insertBefore(p, submissionContainer.childNodes[7]);

}


export {
    displayForm
};