function scuberGreetingForFeet(someFeet){
  let riderMessage
  
  if (someFeet <= 400) {
    riderMessage = 'This one is on me!'
  } else if (someFeet >= 2500) {
    riderMessage = 'No can do.'
  } else if (someFeet >= 2000) {
    riderMessage = 'I will gladly take your thirty bucks.'
  }
  
  return riderMessage
}

function ternaryCheckCity(someCity){
  let cityMessage
  someCity === 'NYC' ? cityMessage = 'Ok, sounds good.' :  cityMessage = 'No go.'
  return cityMessage
}

function switchOnCharmFromTip(){
  // Write your code here!
}