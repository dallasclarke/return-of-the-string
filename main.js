/*******************
 * YOUR CODE HERE! *
 *******************/

 function yell(str) {
   return str + '!';
 }
 const result = yell('Hey');
 result;

 function getFirstCharacter(str1) {
   return str1[0];
 }
 const name = 'Dallas';
 const char ='D';
 const locationOne = name.indexOf(char);
 const locationOneAgain = name[0];
 locationOneAgain;
 

 function getLastCharacter(str2) {
  return str2.charAt(str2.length-1);
 }
 const result1 = getLastCharacter('Hello how are you?');
 result1;
 const message = 'Hello how are you?';
 const sentenceLength = message.length;
 sentenceLength;

 function getOneCharacter(str3) {
   return str3[9 - 1];
 }
const result2 = getOneCharacter('Hello world!');
result2;

function getTwoCharacters(str4) {
 
  }

function makeCapitalized(str5) {
  return str5.toUpperCase();
}
const result4 = makeCapitalized('hey you');

function yellLouder(str6) {
  return str6.toUpperCase() + '!!!';
}
const result5 = yellLouder('i said hey');

function getInitials(name) {
  return name.split(' ');
  
    
}





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
