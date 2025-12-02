let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("Whats your userName ?");
console.log(kuler(`hello ${userName}, Welcome to Quizzify`, "#dc2626"));
console.log("select any option by selecting (a/b/c/d) \n");

//database for question and answers//
const database = {
   data: [
    {
      question: `let a ={}, b={}
            console.log(a==b)
            cosole.log(a == b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the result of the following comparison?\n\n```javascript\nconsole.log(0 == false);\nconsole.log('' == false);\n```",
      options: {
        a: "true true",
        b: "false false",
        c: "true false",
        d: "false true",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the output when this code is executed?\n\n```javascript\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```",
      options: {
        a: "3 3 3",
        b: "0 1 2",
        c: "0 0 0",
        d: "Error: i is not defined",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What value is logged to the console?\n\n```javascript\nconst a = [1];\nconst b = a;\na.push(2);\nconsole.log(b);\n```",
      options: {
        a: "[1]",
        b: "[1, 2]",
        c: "Error",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What will be the output of the following?\n\n```javascript\nconsole.log(typeof null);\n```",
      options: {
        a: "null",
        b: "object",
        c: "undefined",
        d: "string",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the output due to property shadowing?\n\n```javascript\nconst obj = { x: 1 };\nfunction getX() { return this.x; }\nconst boundGetX = getX.bind({ x: 5 });\nconsole.log(boundGetX());\n```",
      options: {
        a: "1",
        b: "5",
        c: "undefined",
        d: "Error",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the result of the `map` operation?\n\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => {\n  if (num % 2 === 0) return num * 2;\n});\nconsole.log(doubled);\n```",
      options: {
        a: "[1, 4, 3]",
        b: "[undefined, 4, undefined]",
        c: "[null, 4, null]",
        d: "[4]",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the output of this immediate function execution?\n\n```javascript\n(function() {\n  var x = 1;\n  if (true) {\n    var x = 2;\n    console.log(x);\n  }\n  console.log(x);\n})();\n```",
      options: {
        a: "1 and 1",
        b: "2 and 2",
        c: "2 and 1",
        d: "Error and 2",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which of the following is executed last in the event loop?\n\n```javascript\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n```",
      options: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is logged when accessing a non-existent property with a default value?\n\n```javascript\nconst { name, age = 30 } = { name: 'Alice' };\nconsole.log(age);\n```",
      options: {
        a: "undefined",
        b: "30",
        c: "Alice",
        d: "Error",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the correct way to check if an array includes the number 5?",
      options: {
        a: "myArray.contains(5)",
        b: "myArray.find(5)",
        c: "myArray.includes(5)",
        d: "myArray.indexOf(5) > 0",
      },
      correctAnswer: "c",
    },
  ],
};



//leaderboard data//
const leaderboard ={
    data:[
        {
            name:"Ashish yarlgadda",
            score:1
        },
        {
            name:"narsimha naidu",
            score: 9,
        },
        {
            name:"madhav shiva reddy",
            score: 10,
        }
    ]
}
function playGame(userAnswer,correctAnswer){
    if(userAnswer === correctAnswer){
        console.log(kuler("Correct Answer 😃","#059669"))
        score++;
    }else{
        console.log(kuler("Incorrect Answer 😔","#b91c1c"))
        console.log(`Correct Answer is ${correctAnswer}`)
    }
}

//main logic//
function showQuestionsAndOptions(database){
    for(let i=0;i< database.data.length;i++){
        console.log(`Q${i + 1} - ${database.data[i].question}\n`);
        for(let key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`)
        }
        let userAnswer = readlineSync.question("enter your answer - (a/b/c/d) - ").toLowerCase();
        playGame(userAnswer, database.data[i].correctAnswer);
    }
    
}

//highscorer logic for leaderboard//

function highScorer(leaderboard){
    leaderboard.data.push({name:userName,score:score});
    let sortedscore = leaderboard.data.sort((a,b)=>b.score - a.score);
    console.log(kuler("\n check your Postion on the leaderbaord 🎉🎊🎇","#fde047"))
    for(let leader of sortedscore){
        console.log(kuler(`${leader.name} - Score : ${leader.score}`,"#9333ea"))
    }
   
}

showQuestionsAndOptions(database);
console.log(kuler(`Your score is ${score} points`,"#5eed"));
highScorer(leaderboard);