const arrayToString = function(array, separator){
    let text = "";
    let lastIndex = array.length - 1;
    array.forEach((value, index) => {
        if(index == lastIndex){
            text += value;
        } else {
            text += value + separator;
        }
    });
    return text;
};

const sampleArray = ["Red", "Green", "White", "Black"];
console.log(arrayToString(sampleArray, ","));
console.log(arrayToString(sampleArray, "-"));
console.log(arrayToString(sampleArray, "+"));