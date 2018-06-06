// Exercise 1: Flattening Arrays
// Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.
var testArray = [1, [2, 3], [4, [5], 6]];

var flatten = function(arr) {
  var newArr = arr.splice(0);
  result = [];

  while (newArr.length > 0) {

    if(newArr[0].constructor === Array) {
      for(i=0; i<newArr[0].length; i++) {
        result.push(newArr[0][i]);
      };
      newArr.splice(0,1);
    } else {
      result.push(newArr[0]);
      newArr.splice(0,1);
    };
  };

  return result;
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

// Explanation:
// there is no simple/straightforward way to check for object equality/equivalence in JS

// Write your correct code below.
var greet2 = function(person) {
    if (person.name === "Alan") {
        console.log("Hello, Alan!");
    } else {
        console.log("Hi, Amy!");
    };
};
greet2(person1);

// DOM Manipulation Exercises: Write your code below for the next section.

$(document).ready(function() {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
  };

  setInterval(function() {
    $("#one").css("background-color", getRandomColor());
    $("#two").css("background-color", getRandomColor());
    $("#three").css("background-color", getRandomColor());
  }, 100);

  $("#two").delay(5000).fadeOut(1000, function() {
    $(this).delay(3000).fadeIn(1000);
  });

  $("#three").append("<span id='number'>0</span>");

  setInterval(function() {
    if ( $('#two').is(":visible") ) {
      var num = parseInt( $('#number').text() );
      num += 1;
      $("#number").text(num);
    }
  }, 500);

  setTimeout(function() {
    var allListItems = $("li");

    for(i=0; i < allListItems.length; i++) {
      if(i % 2 === 1) {
        $(allListItems[i]).css("color", "red");
      };
    };
  }, 4000);

  setTimeout(function() {
    $(".simple").css("color", "blue");
  }, 6000);

  var j = 0;

  setInterval(function() {
    var allListItems = $("li");

    if( $(allListItems[j]).hasClass('simple') === false ) {
      $(allListItems[j]).css("color", "red");
    };

    j += 1;
    
  }, 1000);

});
