const easyQuestions=[
    {
question:"Who is known as the Electric Pokémon?",
options:[
"Pikachu",
"Charmander",
"Bulbasaur",
"Squirtle"
],
answer:"Pikachu"
},
{
question:"What type is Charizard?",
options:[
"Fire/Flying",
"Water",
"Grass",
"Electric"
],
answer:"Fire/Flying"
},
{
question:"Butterfree is evoloved form of?",
options:[
"Metapod",
"Weedle",
"Kakuna",
"Snorlax"
],
answer:"Metapod"
},
{
question:"Ash won league in which region?",
options:[
"Hoenn",
"Galar",
"Sinnoh",
"Paldea"
],
answer:"Galar"
},
{
question:"who is known as 'The God Pokemon' ",
options:[
"Palkia",
"Zygarde",
"Groudoun",
"Arceus"
],
answer:"Arceus"
},

];

const medQuestions=[
    {
question:"Who is known as aura pokemon?",
options:[
"Charizard",
"Greninja",
"Sceptile",
"Lucario"
],
answer:"Lucario"
},

{
question:"How many Eeveelutions exist currently?",
options:[
"8",
"6",
"3",
"5"
],
answer:"8"
},
{
question:"Which among the following have more than 1 mega evolutions?",
options:[
"Gengar",
"Swampert",
"Greninja",
"Lucario"
],
answer:"Lucario"
},
{
question:"Find the odd one out !!",
options:[
"Miltank",
"Eevee",
"Charmander",
"Snorlax"
],
answer:"Charmender"
},
{
question:"Secondary type of Greninja?",
options:[
"Water",
"Dark",
"Flying",
"Electric"
],
answer:"Dark"
},

];

const hardQuestions=[
    {
question:"What is the signature move of Darkrai ?",
options:[
"Dark Void",
"Nightmare",
"Shadow Force",
"Night Slash"
],
answer:"Dark Void"
},
{
question:"Which pokenon is evolved in rain ?",
options:[
"Blastoise",
"Goodra",
"Noivern",
"Tapu Koko"
],
answer:"Goodra"
},
{
question:"Who is Ash's only mythical Pokémon?",
options:[
"Melmetal",
"Celebi",
"Jirachi",
"Genesect"
],
answer:"Pikachu"
},


{
question:"Who is Ash's last Pokémon?",
options:[
"Pikachu",
"Gengar",
"Dracovish",
"Lucario"
],
answer:"Dracovish"
}

];

let currentQuestion = 0;
let score = 0;

function startQuiz(){

const selectedDifficulty =
document.getElementById("difficulty").value;

if (selectedDifficulty === "easy") {
    quizData = easyQuestions;
} 
else if (selectedDifficulty === "medium") {
    quizData = medQuestions;
} 
else {
    quizData = hardQuestions;
}

document.getElementById("start-screen")
.classList.add("hidden");

document.getElementById("quiz-screen")
.classList.remove("hidden");

loadQuestion();
}

function loadQuestion(){

const current = quizData[currentQuestion];

document.getElementById("question").innerText =
current.question;

document.getElementById("progress").innerText =
`Question ${currentQuestion + 1} of ${quizData.length}`;

const optionsDiv =
document.getElementById("options");

optionsDiv.innerHTML = "";

current.options.forEach(option => {

const btn = document.createElement("button");

btn.innerText = option;

btn.classList.add("option-btn");

btn.onclick = () => checkAnswer(option);

optionsDiv.appendChild(btn);

});
}

function checkAnswer(selected){

const feedback = document.getElementById("feedback");
const correctAnswer = quizData[currentQuestion].answer;

feedback.style.display = "block";


if(selected === correctAnswer){
    feedback.innerText = "✅ Correct!";
    feedback.className = "correct";
    score++;
}
else{
    feedback.innerText =
    "❌ Wrong! Correct answer: " + correctAnswer;
    feedback.className = "wrong";
}

setTimeout(() => {
    feedback.innerText = "";

    feedback.style.display = "none";


    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        showResult();
    }
}, 1500);
currentQuestion++;
}



setTimeout(() => {
    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        showResult();
    }
}, 500);


function showResult(){

document.getElementById("quiz-screen")
.classList.add("hidden");

document.getElementById("result-screen")
.classList.remove("hidden");

document.getElementById("score").innerText =
`Your Score: ${score}/${quizData.length}`;
}
const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.innerText = "☀️";
    } else {
        themeToggle.innerText = "🌙";
    }
};
