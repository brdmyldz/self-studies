document.getElementById("submit").addEventListener("submit", addValues);

function addValues() {
    object1 = document.getElementById("firstval");
    object2 = document.getElementById("secondval");
    value1 = Number(object1.value);
    value2 = Number(object2.value);

    result = value1 + value2;
    document.getElementById("result").innerHTML = value1 + " + " + value2 + " = " + result;

    object1.value = 0;
    object2.value = 0;
    return false; // This line prevent form submission to refresh the page after submission
}