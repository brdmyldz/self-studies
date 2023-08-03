// Assuming n is always positive according to the description of the question.
const sum = function(number){
    let sum = 0;
    for(let counter = 1; counter <= number; counter++){
        sum += counter;
    }
    return sum;
};


console.log(sum(5));
console.log(sum(10));
console.log(sum(0));
console.log(sum(1));