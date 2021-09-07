const readLineSync = require('readline-sync');
const chalk = require('chalk');

let userName = readLineSync.question("What's Your name?\n");
console.log("Hey Welcome " + userName + ",let's test your Js Knowledge");
console.log("For every right answer you will get 2 points and for every wrong answer you will loss 1 point\n");
let wantToPlay = readLineSync.question("To start the quiz press y else n\n");
let highestScore = 0;
let score = 0;


function startQuizz(question ,answer){
  let userAnswer = readLineSync.question(question+"\n");
  if(userAnswer.toLowerCase() === answer){
    score+=2;
    console.log(chalk.green("Right, your score is " + score));
  }else{
     score -= 1;
    console.log(chalk.red("Wrong, Answer is " + answer));
    console.log("your score is " + score)
  }
}

let questions = [
  {
    question : '1.Javascript is a ____programming language\n (a)Synchronous (b)Asynchronous\n',
    answer: 'a'
  },
  {
    question : '2.Which type of JavaScript language is ___\n (a)Assembly-language (b)Object-Based\n',
    answer: 'b'
  },
  {
    question : '3.is "==" and "===" are same in Javascript\n (a)Yes (b)No\n',
    answer: 'b'
  },
  {
    question : '4.is "undefined" and  "notdefined" are same in Javascript\n (a)Yes (b)No\n',
    answer: 'b'
  },
   {
    question : '5.What is the output of the following program? \n  console.log(10>9)\n (a)true (b)false (c)error (d)undefined\n',
    answer: 'a'
  },

]



if(wantToPlay.toLowerCase() === 'n'){
     console.log("Okay no worries, comeback whenever you want to play!");
}else{
  for(let i = 0; i<questions.length;i++){
    let question  = questions[i].question;
    let answer = questions[i].answer;
    startQuizz(question , answer);
  }
  if(score>highestScore){
    highestScore = score;
    console.log("woohhh, you scored highest!!");
  }
  console.log(chalk.green("HighestScore: " + highestScore, "Your Score: " + score));
}
