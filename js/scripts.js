let userSentence = prompt("Enter a sentence")

function firstLetter() {
  return (userSentence.charAt(0)).toUpperCase();
}


function lastLetter() {
  return userSentence.toUpperCase().charAt(userSentence.length-1)
}

// function upperCase(){
//   return (firstLetter.toUpperCase())h;
// }

alert(firstLetter()+lastLetter());
