function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    if(quiz.score==0){
        var gameOverHTML = "<h2 id='score'> Your scores: " + quiz.score + "</h2>"+"<h2 id='text'>Better Luck Next Time!</h2>"+"<br> <img id='sm' src='lose1.gif'/></br>";
    }
    if(quiz.score>0 && quiz.score<3 ){
        var gameOverHTML = "<h2 id='score'> Your scores: " + quiz.score + "</h2>"+"<h2 id='text'>LOW SCORE :(</h2>"+"<br> <img id='sm' src='ok1.gif'/></br>";
    }
    if(quiz.score>2 && quiz.score<5 ){
        var gameOverHTML = "<h2 id='score'> Your scores: " + quiz.score + "</h2>"+"<h2 id='text'>GOOD RUN (^-^)</h2>"+"<br> <img id='sm' src='smart1.gif'/></br>";
    }
    if(quiz.score==5 ){
        var gameOverHTML = "<h2 id='score'> Your scores: " + quiz.score + "</h2>"+"<h2 id='text'>CLEAN SWEEP!!!</h2>"+"<br> <img src='win1.gif' style='margin-left:50px;'/></br>";
    }
    
    
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};

// create questions
var questions = [
    
    new Question("Who is this? <br> <img src='cheif2.jpg' height='70'/></br>", ["Doctor","Police", "Driver","Chief",], "Chief"),

    new Question("National Animal of India?", ["Elephant", "Bengal Tiger","Lion", "Cow"], "Bengal Tiger"),
    
    new Question("What is the Capital of India?", ["New Delhi", "Mumbai","Jaipur", "Kolkata"], "New Delhi"),

    new Question("Select the UNESCO Logo?", ["<img src='logo.jpg' height='50'/>", "<img src='psk.jpeg' height='50'/>","<img src='kps1.jpg' height='50'/>", "<img src='img67.jpg' height='50'/>"], "<img src='img67.jpg' height='50'/>"),

    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),
];


var quiz = new Quiz(questions);


populate();





