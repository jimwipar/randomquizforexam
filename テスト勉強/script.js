const quizlist = [
    "徳川初代将軍は？",
    "徳川二代将軍は？",
    "徳川三代将軍は？",
    "徳川五代将軍は？"
]
const answerlist = [
    "家康",
    "秀忠",
    "家光",
    "綱吉"
]
function askquiz () {
    listnum = Math.floor(Math.random()*5);
    quizsentance.textContent = quizlist[listnum];
}
const quiz = document.getElementById('quiz');
const quizsentance = document.getElementById('quizsentance');
const resalt = document.getElementById("resalt");
const finish = document.getElementById("finish");
const answer = document.getElementById("answerbox")

let ans;
let num;
let listnum;
quiz.addEventListener('click', () =>{
    askquiz()
});
finish.addEventListener('click', () =>{
    if(answer.value==answerlist[listnum]){
        resalt.textContent = "結果：正解"
        quizsentance.textContent = "";
        document.getElementById("answerbox").value = "";
        document.getElementById("resalt").value = "結果：";
    }
    else{
        ans = answerlist[listnum]
        console.log(ans)
        resalt.textContent = "結果：不正解 答えは" + ans + "です"  
        document.getElementById("answerbox").value = "";
    }
});