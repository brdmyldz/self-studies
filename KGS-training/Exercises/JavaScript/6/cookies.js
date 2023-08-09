function createCookies(formData, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();

    let subjectsValue = "";
    for (const [key, value] of formData) {
        // Special case for subjects since we need to list subjects in one line
        if(key == "Subjects"){
            subjectsValue += value + ", ";
        } else {
            document.cookie = key + "=" + value + ";" + expires + ";path=/";
        }
    }

    // Chop off the extra ", " from the end
    subjectsValue = subjectsValue.substring(0, subjectsValue.length - 2);
    // Generate Subjects and insert into 7th position
    document.cookie = "Subjects=" + subjectsValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export {
    createCookies,
    getCookie
};