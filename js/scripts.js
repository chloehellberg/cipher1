let userSentence = prompt("Enter a sentence")


function firstLetter() {
  return (userSentence.charAt(0)).toUpperCase();
}


function lastLetter() {
  return userSentence.toUpperCase().charAt(userSentence.length-1)
}

let newVar = [firstLetter()] + [lastLetter()]

function reverseStr() {
  return newVar.split('').reverse().join('');
}

function countLetters() {
  return userSentence.charAt(userSentence.length/2)
}


var finalString = (countLetters() + userSentence + reverseStr())

function superString() {
  return finalString.split('').reverse().join('');
}

alert(superString());
