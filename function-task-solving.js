//Take four parameters. Multiply the four numbers and then return the result
function multiplyNumbers(a, b, c, d) {
  let result = a * b * c * d;
  //   console.log(result);
  return result;
}

console.log("output" + " " + multiplyNumbers(2, 3, 4, 5));

// another way
let output = multiplyNumbers(2, 3, 4, 5);
console.log("output" + " " + output);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven(num){
    if(num % 2 == 0){
         console.log(num * 2);
    }
    else console.log(num * 3);
       
}
oddOrEven(9)


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(markes){
    let sum = 0;
    for( let num = 0; num < markes.length; num++){
        sum += markes[num];
}
// return sum;
let average = sum / markes.length;
return average;

}
let averageResult = make_avg([8, 6, 4, 3, 7, 9]);
console.log(averageResult.toFixed(2))




// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(input){
    let count = 0;
    for ( let i = 0; i < input.length; i++){
        if (input[i] === "0" ){ 
            count++}
    }
    return count;
}
let counts = count_zero("010100");
console.log(counts)
