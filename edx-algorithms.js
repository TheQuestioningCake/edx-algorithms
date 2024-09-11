// function for fizz-buss
var fizzBuzz = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currentNumber = arr[i];
        if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
            console.log("Fizz Buzz");
        } else if (currentNumber % 3 === 0) {
            console.log("Fizz");
        } else if (currentNumber % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(currentNumber);
        }
    }
};


// function to return the largest number in a given array
var maxNum = function(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};


// function to return the number of vowels in a 'str'
var vowelCount = function(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};