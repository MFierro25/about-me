'use strict';

let userName = prompt('Welcome! Tell me your Name!'); {
    alert('Welcome ' + userName + ' - To The DARKSIDE! Let\'s play a game.');
  console.log(userName);
}
let guesscount =0;
let myAge = prompt('Am I over the age of 35?');
let oldman = myAge.toLowerCase();

console.log(oldman);

if (oldman === 'yes' || oldman === 'y') {
    console.log("true");
alert('Correct, I am OLD AF!');
    guesscount +=1
} else if (oldman === 'no' || oldman === 'n') {
    console.log("false");
alert('Awwww you are too sweet.');
} 

let myCar = prompt('Do I drive a Toyota?');
let yotatruck = myCar.toLowerCase();   

console.log(yotatruck);

if (yotatruck === 'yes' || yotatruck === 'y') {
    console.log("true");
alert('Taco Life!!');
    guesscount +=1;
} else if (yotatruck === 'no' || yotatruck === 'n') {
    console.log("false");
alert('So close, but no.');
} 

let myKids = prompt('Do I have any kids?');
let munchkins = myKids.toLowerCase();   

console.log(munchkins);

if (munchkins === 'yes' || munchkins === 'y') {
    console.log("true");
alert('YES! I have FOUR - DAD LIFE!');
    guesscount +=1;
} else if (munchkins === 'no' || munchkins === 'n') {
    console.log("false");
alert('Dang, almost, but not quite.');
} 

let myBranch = prompt('Am I a veteran?');
let navy = myBranch.toLowerCase();   

console.log(navy);

if (navy === 'yes' || navy === 'y') {
    console.log("true");
alert('Go NAVY!!');
    guesscount +=1;
} else if (navy === 'no' || navy === 'n') {
    console.log("false");
alert('Oooof you must not know me.');
} 

let myCity = prompt('Was I born in the PNW?');
let caliboy = myCity.toLowerCase();   

console.log(caliboy);

if (caliboy === 'yes' || caliboy === 'y') {
    console.log("false");
alert('Sadly, no, I am a Cali boy.');
} else if (caliboy === 'no' || caliboy === 'n') {
    console.log("true");
alert('Correct, I am so sorry, born in Orange County, CA.');
    guesscount +=1;
} 
function swGame(){
    let answer = prompt('Who is my favorite Star Wars character of all time?')
    let correctAnswer = ['Darth Vader', 'Boba Fett' , 'Han Solo'];
    let numberOfAttempts = 6;
    for(let i = 1; i <= numberOfAttempts; i++){
        console.log("correct answer" , correctAnswer)
        console.log("your answer" , answer)
        if(correctAnswer[0] == answer || correctAnswer[1] == answer){
            alert("Yesss, feeel the darkside flow through you.")
            correctAnswer++;
            break;
        } else {
        alert('Rebel Scum, you got it wrong! The empire has granted you ' + (numberOfAttempts = i) + ' more attempts.')
        }
        answer = prompt('Now who is my favorite character?').toLowerCase();
    }
}
swGame()

alert('You have been granted ' + correctAnswer + ' out of 7 correct.');