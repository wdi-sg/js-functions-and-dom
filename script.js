// Exercise 1: Flattening Arrays
// Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.
var testArray = [1, [2, 3], [4, [5, [6,7,8]], 6]];

var flatten = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].constructor === Array) { //to check array, better to type Array.isArray(arr[i])
			var copy = arr;
			//top = to the array before the embedded array 
			var top = arr.slice(0,i);
			//bottom = to the array after the embedded array
			var bottom = arr.slice(i+1,arr.length);
			//reset the arr to an empty one
			arr = [];

			//iterate through the elements in the embedded array and add it to the add of top array
			for (var a = 0; a < copy[i].length; a++) {
				top.push(copy[i][a]);
			}

			//adding top to arr
			for (var a = 0; a < top.length; a++) {
				arr.push(top[a]);
			}

			//adding bottom to arr
			for (var a = 0; a < bottom.length; a++) {
				arr.push(bottom[a]);
			}
		}
	}

	return arr;
}

var result = flatten(testArray);
console.log(result); // Should print out [1, 2, 3, 4, [5], 6];

// Bonus: Flatten the array really hard. No matter how many sub-arrays it has, your function should return an array with no sub-arrays. E.g. flattenDeep(testArray) should return [1, 2, 3, 4, 5, 6].
// Hint: You will have to find a way to test whether an array has any sub-arrays or not. If it does, your flatten function above should be useful.


// Exercise 2: Debugging
// You'd expect the function below to greet Alan. Why doesn't it? Explain and debug.
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

// Explanation: I don't know....
// Write your correct code below.
var person1 = {name: "Alan"};
var person2 = {name: "Amy"};
var greet = function(person) {
    if (person.name== "Alan") {
        console.log("Hello, Alan!");
    } else {
        console.log("Hi, Amy!");
    };
};
greet(person1);


// DOM Manipulation Exercises: Write your code below for the next section.

//Exercise 3
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var lists = document.getElementsByTagName('li');


function E3 () {
	var colors = ['red', 'green', 'blue', 'black', 'grey', 'salmon'];

	setInterval(function () {
		var rand1 = Math.floor(Math.random() * 6);
		one.style.background = colors[rand1];

		var rand2 = Math.floor(Math.random() * 6);
		two.style.background = colors[rand2];

		var rand3 = Math.floor(Math.random() * 6);
		three.style.background = colors[rand3];

	}, 10000)
}

// E3();


//Exercise 4
function E4 () {
	setTimeout(twoHidden, 3000);

	function twoHidden () {
		two.style.visibility = 'hidden';
		setTimeout(twoShown, 3000)
	}

	function twoShown () {
		two.style.visibility = 'visible';
		setTimeout(twoHidden, 2000)
	}
}

// E4();	



//Exercise 5
function E5 () {
	var num = 0;
	var para = document.createElement('span');
	para.style.color = 'white';

	setInterval(function () {
		num++;
		var string = num.toString();
		para.innerHTML = string;
		three.appendChild(para);

	}, 500)

}

// E5();


//Exercise 6
function E6 () {
	var simple = document.querySelectorAll('.simple');

	setTimeout(function () {
		for (var i = 0; i < lists.length; i++) {
			if((i+1)%2 == 0) {
				lists[i].style.color = 'red';
			}
		}
	}, 4000)

	setTimeout(function () {
		for (var i = 0; i < simple.length; i++) {
			simple[i].style.color = 'blue';
		}
	}, 6000)
}

// E6();



//Exercise 7
function E7 () {
	var i = 0;
	console.log(i);
	setInterval(foo, 1000)

	function foo () {
		if (i < lists.length) {
			if(i == 0) {
				lists[i].style.color = 'red';
				i ++;
			} else {
				lists[i].style.color = 'red';
				lists[i-1].style.color = 'black';
				i++;
			}
		} else {
			lists[i-1].style.color = 'black';
			clearTimeout(foo, 1000);
		}
	}
}

// E7();

