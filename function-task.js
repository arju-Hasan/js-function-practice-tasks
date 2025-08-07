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