var readlineSync = require("readline-sync")
var score = 0
var level = 0
function introSection(firstques){
  var username = readlineSync.question(firstques).toUpperCase();
 
  console.log("Hey welcome " + username + " I wish you know me better")
  console.log("-----------------")
  console.log("Let's play the game")
  console.log("-----------------")  
}

introSection("What is your name? ")

var myquestion = ["Is has my any nickname? (yes/no) ", "Where is my hometown? ", "What is my birth date (format - dd-mm-yyyy)? ", "What is my favourite sports game? ", "I like chiness food? "]
var myanswer = ["no", "bihar", "22-08-2001", "cricket" , "no"]

function proess(myques, myans){
  var userAnswer = readlineSync.question(myques).toLowerCase();
  if(userAnswer === myans){
    console.log("You are correct 😇")
    score++
   
    console.log("1 point increase")  
    console.log("                 ")
  }else{
    console.log("you are wrong 😓")
    score--
    console.log("1 point decrease")
    console.log("                 ")
    }
  if(score === 2 ){
      console.log('Level up now play second round 😃')
    }else if(score === 4){
      console.log('Level up now play third round 😎')
    }else if(score === 5){
      console.log('Yay!!  you are my real friend 😉')

    }

}


for(var i = 0; i < myquestion.length;i++ ){
proess(myquestion[i], myanswer[i])
}
console.log(" ")
console.log("Now your total score is " + score)
console.log(" ")

var highScore = {
   name : "xyz",
   point : 4,
 }
 
if(score > highScore.point){
  highScore.point = score
  console.log(`Now your score is new highscore`)
}else{
  console.log(`Sorry!, ${highScore.name} has highscore With  ${highScore.point} point . Try again`)
}
console.log(" ")

console.log(" Quiz answer")
console.log(" ")

for(var i = 0; i < myquestion.length;i++ ){
console.log(myquestion[i], " :- ", myanswer[i])
}


