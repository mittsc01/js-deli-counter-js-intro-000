function takeANumber(currentLine,person){
  currentLine.push(person)
  return `Welcome, ${person}. You are number ${currentLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length>=1){
    return "Currently serving "+katzDeliLine.shift()+"."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
