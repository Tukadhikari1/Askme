const question = [
    {
        quistion: "How many Amwaj crew @ Echo?",
        answers: [
            { text: "19", correct: true},
            { text: "12", correct: false},
            { text: "28", correct: false},
            { text: "14", correct: false},
        ]
    },
      {
        quistion: "Chef @ Echo?",
        answers: [
            { text: "Harihar", correct: false},
            { text: "Samy", correct: false},
            { text: "Karim", correct: false},
            { text: "Mr. Khum", correct: true},
        ]
    },
     {
        quistion: "Camp Boss @ Echo?",
        answers: [
            { text: "John", correct: false},
            { text: "Francisco", correct: true},
            { text: "Mahesh", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        quistion: "How many continent are in the world?",
        answers: [
            { text: "5", correct: false},
            { text: "7", correct: true},
            { text: "4", correct: false},
            { text: "8", correct: false},
        ]
    },
    {
        quistion: "What is the age of sun?",
        answers: [
            { text: "3 billion years", correct: false},
            { text: "1 billion years", correct: false},
            { text: "20 billion years", correct: false},
            { text: "4.603 billion years", correct: true},
        ]

    },
    {
        quistion: "Alpha Chef?",
        answers: [
            { text: "Suresh", correct: false},
            { text: "Mr. Rim Magar", correct: true},
            { text: "John", correct: false},
            { text: "Mark", correct: false},
        ]

    },
    {
        quistion: "Alpha new dinner meal time?",
        answers: [
            { text: "6-7pm", correct: false},
            { text: "5-7pm", correct: false},
            { text: "515 to 7pm", correct: true},
            { text: "4 to 7 pm", correct: false},
        ]

    },
    
    {
        quistion: "What is the distance around Earth at the Equator ?",
        answers: [
            { text: "40075 km", correct: true},
            { text: "43000 km", correct: false},
            { text: "39701 km", correct: false},
            { text: "40750 km", correct: false},
        ]
    },
    {
        quistion: "What is the distance between sun and earth?",
        answers: [
            { text: "151 million km", correct: false},
            { text: "150 thousend km", correct: false},
            { text: "150.94 million km", correct: true},
            { text: "150 billion km", correct: false},
        ]


    },
    {
        quistion: "Select the largest country in the world by size?",
        answers: [
            { text: "Russia", correct: true},
            { text: "China", correct: false},
            { text: "India", correct: false},
            { text: "Brasil", correct: false},
        ]    
    },
    {
        quistion: "What is earth size?",
        answers: [
            { text: "510.1 million km²", correct: true},
            { text: "119 thousend km²", correct: false},
            { text: "16.94 million km²", correct: false},
            { text: "50 billion km²", correct: false},
        ]  
    },
    {
        quistion: "Who is the founder of Caltech?",
        answers: [
            { text: "Amos G. Throop", correct: true},
            { text: "Agry G. Throop", correct: false},
            { text: "John G. abrham", correct: false},
            { text: "Meckey J John", correct: false},
        ]  
    },
    {
        quistion: "Who is the founder of Simplilearn?",
        answers: [
            { text: "Bhagat singh", correct: false},
            { text: "Lal bahadur sastri", correct: false},
            { text: "Krishna Agrawal", correct: false},
            { text: "Krishna Kumar", correct: true},
        ]  
    },
    {
        quistion: "Capital of thailand?",
        answers: [
            { text: "Dhaka", correct: false},
            { text: "Bangkok", correct: true},
            { text: "Kalahari", correct: false},
            { text: "Taipi", correct: false},
        ]   
    },
    {
        quistion: "PM OF BANGLADESH?",
        answers: [
            { text: "Romzan Ali", correct: false},
            { text: "Ahmad Mahbur", correct: false},
            { text: "Babul", correct: false},
            { text: "Sheikh Hasina", correct: true},
        ]   
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
   
    showQuestion();
}
function showQuestion(){

    resetState();
let currentQuestion = question[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.
    quistion;

currentQuestion.answers.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);
});
}
function resetState(){
    nextButton.style.disply = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");  
        score++; 
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.
    length}!`;
    nextButton.innerHTML = "Take Quiz Again";
    nextButton.style.display = "block"
    }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
     showQuestion();   
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < question.length){
    handleNextButton();
}else{
    startQuiz();
}
});
startQuiz();
