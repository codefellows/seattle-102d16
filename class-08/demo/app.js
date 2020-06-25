'use strict'

var ableToAdopt = false;

function askUserName(){
    var internalUserName = prompt('What is your name?');
    document.write('<h2>' + 'Welcome '+ internalUserName + '</h2>');
    '<h2>Welcome Roger</h2>'
    return internalUserName;
}

function confirmContinue(userName){ // the function is accepting a parameter
    confirm(userName + " I am going to ask you a series of questions");
}

function lightSide(){
    var lightSide;
    lightSide = prompt('Are you a user of the light side of the force? (yes or no)');
    while(lightSide.toLowerCase() != 'yes' && lightSide != 'no'){
        lightSide = prompt('Are you a user of the light side of the force? (yes or no)');
    }
    return lightSide
}

function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'yes'){
        alert('I am sorry.  Dark Lords do not take kindly to Jedi!')
        ableToAdopt = false;
    } else {
        alert('GOOD GOOD. I can feel the dark side flowing through you!');
        ableToAdopt = true;
    }
}

function forceTest(){      // i++
    var answer = 38;
    for(var i = 0; i < 10; i = i + 1){
        var userAnswer = prompt("Please guess a number between 1 and 100");
        if(parseInt(userAnswer) ===  answer){
            alert('You are a TRUE Sith Lord!')
            ableToAdopt = true;
            break;
        } else{
            alert("Wrong Answer.  Try again")
        }
    }
    if(i > 9){
        ableToAdopt = false;
    }
    
    // 10 chances to guess a number between 1 and 100
    // if they pass they can adopt, if not no adoption

}


function adopt(lightSideQuestion){
    if(ableToAdopt === true){
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






// var externalUserName = askUserName(); // value of internalUserName not the variable name
// confirmContinue(externalUserName);  // this is passing an argument
confirmContinue(askUserName());
var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
forceTest();
adopt(lightSideQuestion);