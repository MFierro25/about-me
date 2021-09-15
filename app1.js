'use strict';

let userName = prompt('Welcome! Tell me your Name!'); {
    alert('Welcome ' + userName + ' - To The DARKSIDE!');
  console.log(userName);
}

let myAge = prompt('Am I over the age of 35?');
let oldman = myAge.toLowerCase();

console.log(oldman);

if (oldman === 'yes' || oldman === 'y') {
    console.log("true");
alert('Correct, I am OLD AF!');
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
} 