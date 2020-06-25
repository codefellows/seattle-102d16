'use strict'


function askUserName(){
    var internalUserName = prompt('What is your name?');
    document.write('<h2>' + 'Welcome '+ internalUserName + '</h2>');
    '<h2>Welcome Roger</h2>'
    return internalUserName;
}

// askUserName(); // value of internalUserName not the variable name


// console.log(externalUserName);


function confirmContinue(userName){ // the function is accepting a parameter
    confirm(userName + " I am going to ask you a series of questions");
}

function lightSide(){
    var lightSide;
    lightSide = prompt('Are you a user of the light side of the force?');
    return lightSide
}

function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'yes'){
        alert('I am sorry.  Dark Lords do not take kindly to Jedi!')
    } else {
        alert('GOOD GOOD. I can feel the dark side flowing through you!');
    }
}

function adopt(lightSideQuestion){
    if(lightSideQuestion === 'no'){
        var adopt = prompt('Are you ready to adopt a Sith Lord?');

        if(adopt === 'yes'){
            alert('Great. An adoption specialist will be assigned shortly');
        } else if(adopt === 'no'){
            alert('That is ok.  You may need to build up your tolerance for dark side energies.  Come back when you are ready.');
        } else {
            alert('Are you mental?  a simple "yes" or "no" is not that hard');
        }
    }
}



var externalUserName = askUserName(); // value of internalUserName not the variable name
confirmContinue(externalUserName);  // this is passing an argument
var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
adopt(lightSideQuestion);