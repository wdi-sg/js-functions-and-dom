# Javascript and the DOM

This is the last of synthetic JS exercises for now.
1. Fork and clone the repo as usual.
2. Write your code in script.js and load index.html in your browser to run it.

## Exercise 1: Flattening Arrays
Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.
```
var testArray = [1, [2, 3], [4, [5], 6]];

var flatten = function(arr) {

}

var result = flatten(testArray);
console.log(result); // Should print out [1, 2, 3, 4, [5], 6];
```

_Bonus: Flatten the array really hard. No matter how many sub-arrays it has, your function should return an array with no sub-arrays. E.g. flattenDeep(testArray) should return [1, 2, 3, 4, 5, 6]._

_Hint: You will have to find a way to test whether an array has any sub-arrays or not. If it does, your flatten function above should be useful._


## Exercise 2: Debugging
You'd expect the function below to greet Alan. Why doesn't it? Explain and debug.
```
var person1 = {name: "Alan"};
var person2 = {name: "Amy"};
var greet = function(person) {
    if (person === {name: "Alan"}) {
        console.log("Hello, Alan!");
    } else {
        console.log("Hi, Amy!");
    };
};
greet(person1);
```



# DOM Manipulation Exercises

## Exercise 3
There are 4 divs on index.html, the first being the one on the left, and the fourth on the right.
When the user clicks on the first div, change its color to a random color.

_Bonus: Make it continuously change to random colors once the user's mouse hovers over it._

## Exercise 4
When the user click on the second div, make it disappear after 5 seconds.

_Bonus: Make it reappear after 3 further seconds._

_Bonus: Make it so that when it disappears, it does not cause the other div elements to move. Hint: There are at least 2 ways to make something effectively invisible - changing its display setting, and changing its visibility setting. They both have different side effects._

## Exercise 5
The third div should contain a number that increments by 1 every 0.5 seconds.
Make it so that clicking on the div decreases the number by 1.
_Bonus: Make it so that the user cannot decrease the number by more than 2 per 0.5 seconds via clicking._

## Exercise 6
There is an unordered list with some elements.
Make the even-numbered list elements turn red 4 seconds after the document loads.
The list elements with a class of simple should turn blue 6 seconds after the document loads.

## Exercise 7
When the user clicks on one list element, the NEXT element down the list turns gray.