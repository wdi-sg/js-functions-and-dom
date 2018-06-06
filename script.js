// Exercise 1: Flattening Arrays
// Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.
// var testArray = [1, [2, 3], [4, [5], 6]];

// var isArray = function(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === "object") {
// 			return true;
// 		}
// 	}
// }

// var flattenDeep = function(arr) {
// 	while (isArray(arr) === true) {
// 		arr = flatten(arr);
// 	}
// 	return arr;
// }

// var flatten = function(arr) {
// 	var result = [];
// 	arr.forEach(function(el) {
// 		if (typeof el !== "number") {
// 			for (var i = 0; i < el.length; i++) {
// 				result.push(el[i]);
// 			}
// 		} else {
// 			result.push(el);
// 		}
// 	});
// 	return result;
// }

// var result = flatten(testArray);
// var result2 = flattenDeep(testArray);
// console.log(result); // Should print out [1, 2, 3, 4, [5], 6];
// console.log(result2);

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

// // Explanation: we cannot equate objects to themselves
// // Write your correct code below.

// var greet2 = function(person) {
// 	console.log("Hello, " + person.name + "!");
// }
// greet2(person1);

// DOM Manipulation Exercises: Write your code below for the next section.





// Exercise 3:

// var keyboard = "abcdef1234567890";

// var randomColor = function() {
// 	var result = "#";
// 	for (var i = 0; i < 6; i++) {
// 		var number = Math.floor(Math.random() * 16);
// 		result += keyboard[number];
// 	}
// 	return result;
// }

// var changeColor = setInterval(function() {
// 	for (var i = 0; i < 3; i++) {
// 		var div = document.getElementsByTagName("div")[i];
// 		div.style.backgroundColor = randomColor();
// 	}
// }, 10000)





// Exercise 4 & 5:

// var count = 0;
// var counter;

// function counting() {
// 	counter = setInterval(function() {
// 		count++;
// 		var div3 = document.getElementById("three");
// 		div3.innerHTML = count;
// 	}, 500);
// }

// counting();

// var missing = setInterval(function() {
// 	var div2 = document.getElementById("two");
// 	div2.style.visibility = "hidden";
// 	var stopCount = clearInterval(counter);
// 	var appear = setInterval(function() {
// 		var div2 = document.getElementById("two");
// 		div2.style.visibility = "visible";
// 		counting();
// 	}, 3000);
// }, 5000);





// Exercise 6:

// var list = document.getElementsByTagName("li");

// window.onload = function() {
// 	list = document.getElementsByTagName("li");
// 	for (var i = 0; i < list.length; i++) {
// 		if (i % 2 === 0) {
// 			list[i].style.color = "red";
// 		}
// 	}
// 	var turnBlue = setInterval(function() {
// 		for (var i = 0; i < list.length; i++) {
// 			if (list[i].getAttribute("class") === "simple") {
// 				list[i].setAttribute("style", "color: blue");
// 			}
// 		}
// 	}, 6000);
// }





// Exercise 7:

var list = document.getElementsByTagName("li");
var index = 0;
var time = list.length * 1000;
var turnRed = setInterval(function() {
	if (list[index].getAttribute("class") !== "simple"){
		list[index].setAttribute("style", "color: red");
	}
	if (index > 0) {
		list[index - 1].setAttribute("style", "color: black");	
	}
	index++
}, 1000);
var endRed = setTimeout(function() {
	clearInterval(turnRed);
}, time);