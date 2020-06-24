'use strict'

// var today = new Date();
// var hourNow = today.getHours(); 
var greeting;

alert('Welcome to my Page!');


var hourNow = prompt('What is the current hour?')
hourNow = parseInt(hourNow)



// hourNow = 8
// greeting = ''

if (hourNow > 18) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

'21' == 21