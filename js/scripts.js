let userSentence = prompt("Enter a sentence")

function lastLetter() {
  return userSentence.charAt(userSentence.length-1);
}


function firstLetter() {
return (userSentence.charAt(0));
}

console.log(firstLetter()+lastLetter());
