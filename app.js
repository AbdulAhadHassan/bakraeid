// var userInp = prompt('Enter date')
var dob = new Date('Jun 16 2024').getTime()
var oldDate = new Date().getTime()

var finalDate = dob-oldDate
var conVar = finalDate / (1000 * 60 * 60 * 24 )

document.write(Math.floor(conVar))
console.log(oldDate)