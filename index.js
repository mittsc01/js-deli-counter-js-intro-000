function takeANumber(currentLine,person){
  currentLine.push(person)
  return `Welcome, ${person}. You are number ${currentLine.length} in line.`
}
