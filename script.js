// Exercise 1: Flattening Arrays
// Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.

// // Option 1:
// let testArray = [1, [2, 3], [4, [5], 6]];
// testArray = testArray.reduce(function(a, b){
//     // insted of one value, concat to return an array
//     return a.concat(b);
//     }, []);
// console.log(testArray); // Should print out [1, 2, 3, 4, [5], 6];

// // Option 2:
let testArray = [1, [2, 3], [4, [5], 6]];

let flatten = function(arrayToFlatten) {
    let flattenedArray = arrayToFlatten.reduce(function(a, b){
        return a.concat(b);
    }, []);
    return flattenedArray;
}

let result = flatten(testArray);
console.log(result);

// Bonus: Flatten the array really hard. No matter how many sub-arrays it has, your function should return an array with no sub-arrays. E.g. flattenDeep(testArray) should return [1, 2, 3, 4, 5, 6].
// Hint: You will have to find a way to test whether an array has any sub-arrays or not. If it does, your flatten function above should be useful.


// Exercise 2: Debugging
// You'd expect the function below to greet Alan. Why doesn't it? Explain and debug.
// var person1 = {name: "Alan"};
// var person2 = {name: "Amy"};
// var greet = function(person) {
//     if (person === {name: "Alan"}) {
//         console.log("Hello, Alan!");
//     } else {
//         console.log("Hi, Amy!");
//     };
// };
// greet(person1);

// Explanation: should use person["name"] as condition
// Write your correct code below.

let person1 = {name: "Alan"};
let person2 = {name: "Amy"};

let greet = function(person) {
    if (person["name"] === "Alan") {
        console.log("Hello, Alan!");
    } else {
        console.log("Hi, " + person["name"] + " !");
    };
};
greet(person1);

// DOM Manipulation Exercises: Write your code below for the next section.
// Exercise 3

let square1 = document.getElementById('one');
let square2 = document.getElementById('two');
let square3 = document.getElementById('three');
let square4 = document.querySelector('.not-to-be-touched');

square1.className = 'squares';
square2.className = 'squares';
square3.className = 'squares';
// add instead of replace
square4.className += ' squares';

let squaresArray = [square1,square2,square3,square4];
// console.log(squaresArray);

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let changeColour = function() {
    squaresArray.forEach(square => {
        square.style.backgroundColor = getRandomColor();
    })
}

// then call the function var without parenthesis (or it will be executed immediately)
// setTimeOut(changeColour, 10000);
setInterval(changeColour, 2000);

// Exercise 4:
// Make the 2nd div disappear after 5 seconds.
// Bonus: Make it reappear after 3 further seconds.
// Bonus: Make it so that when it disappears, it does not cause the other div elements to move.
// Hint: There are at least 2 ways to make something effectively invisible - changing its display setting, and changing its visibility setting.
// They both have different side effects.

let disappearElement = function() {
    squaresArray[1].style.visibility = "hidden";
}

let appearElement = function() {
    squaresArray[1].style.visibility = "visible";
}

setTimeout(disappearElement, 3000);
setTimeout(appearElement, 5000);

// Exercise 5:
// The third div should contain a number that increments by 1 every 0.5 seconds.
// Bonus: Make it so that the number does not increment as long as the 2nd div is not displayed/visible.

square3.textContent = parseInt(0);

let number = 0;
setInterval(function() {
    number = number + 1;
    square3.textContent = number;
}, 500);

// Exercise 6
// There is an unordered list with some elements. Make the even-numbered list elements turn red 4 seconds after the document loads.
// The list elements with a class of simple should turn blue 6 seconds after the document loads.
// Hint: You can select more than one element with document.querySelectorAll().

let evenLists = document.querySelectorAll("li:not([class])");
let simpleLists = document.querySelectorAll(".simple");

let turnRed = function() {
    for (i = 0; i < evenLists.length; i++) {
        evenLists[i].style.color = "red";
    }
}

let turnBlue = function() {
    for (i = 0; i < simpleLists.length; i++) {
        simpleLists[i].style.color = "blue";
    }
}

setTimeout(turnRed, 4000);
setTimeout(turnBlue, 6000);

// Exercise 7
// Make the font color of the first list element red after 1 second.
// After every second, make the next list element red, as long as its class is not "simple".
// When a list element is made red, the color of the previous list element should be reset to black.
// Bonus: Write your code in such a way that it still works as expected when the classes of the list elements are changed via the console while the page is loaded.

let firstOfLists = document.querySelector("li");
let allLists = document.querySelectorAll("li");

let counter = 0;

firstOfLists.style.color = "red";

let turnRedAlso = function() {
    allLists[counter].style.color = "black";
    if (counter == allLists.length - 1) {
    clearInterval(myInterval);
    return;
    }
    counter += 1;
    if (allLists[counter].className !== "simple") {
        allLists[counter].style.color = "red";
     }
}

let myInterval = setInterval(turnRedAlso, 500);