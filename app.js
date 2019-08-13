(function(){

    var questionBank = [];
    var totalScore = score();

    function score(){
        var score = 0;

        return function(correct){

            if(correct){
                score++;
            }
            return score;
        }
    } 
       
    createQuestionBank();
    //console.log('This is IIFE !!!!');
    function Question(question , answers , correctAnsIndex) {
   
  
        this.question = question;
        this.answers = answers;
        this.correctAnsIndex = correctAnsIndex;
    
    }
    
    Question.prototype.validateAnswer = function(userOption){

        var result = this.correctAnsIndex === userOption ? true : false;
        var score; 

        if(result){
            console.log('Correct Answer !!');
            score = totalScore(true);

        }else{
            console.log('Wrong Answer !!');
            score = totalScore(false);
        }
        console.log('Your Current Score  = ',score);
    }

    Question.prototype.displayQuestion = function(){

        var questionPrompt = this.question + "\n";
    
        for(var questionIndex = 0 ; questionIndex < this.answers.length ; questionIndex ++ ){
    
            questionPrompt = questionPrompt + questionIndex + " : " + this.answers
            [questionIndex] + "\n" ; 
    
        }
        console.log(questionPrompt);
    }
        
    function createQuestionBank() {
        
        var question = new Question("What is Your Pet's Name ? ", [
            "Ramu",
            "Baban",
            "Sonba",
            "Buva"
        ],0);
    
        questionBank.push(question);
    
        question = new Question("What is Favourite Sport ? ", [
            "Cricket",
            "Golf",
            "Football",
            "Hockey"
        ],2);
        
        questionBank.push(question);
    
        question = new Question("What is Favourite Book ? ", [
            "I Dare !!",
            "Daag , The Fire ",
            "Calidoscope",
            "Wings Of Fire !!"
        ],3);
    
        questionBank.push(question);
    
        question = new Question("What is Favourite Color ? ", [
            "Red",
            "Orange",
            "Blue",
            "Green"
        ],1);
    
        questionBank.push(question);
    
        //console.log(questionBank);
    }
    
    while(1){
    
       //get ramdonm question : Question 
       //get answer (Question)
       //check answer value 
       //call validate answer 
       //update score
       var randomQuestion = getRandomQuestion();
       var userAnswer = getAnswer(randomQuestion);
    
       if(isEndQuiz(userAnswer)){
            //updateScore();
            console.log("Your Final Score Is = ",totalScore(false));
            break;
       }else{
    
            randomQuestion.validateAnswer(parseInt(userAnswer));

       }
    
    }
    
    function getRandomQuestion(){
    
        var questionIndex = Math.floor((Math.random() * 4) );
        //console.log("questionIndex = ",questionIndex);
    
        var randomQuestion = questionBank[questionIndex];    
    
        return randomQuestion;
    }
    
    function getAnswer(question){
       
        //console.log("question = ",question);
    
       /* var questionPrompt = question.question + "\n";
    
        for(var questionIndex = 0 ; questionIndex < question.answers.length ; questionIndex ++ ){
    
            questionPrompt = questionPrompt + questionIndex + " : " + question.answers
            [questionIndex] + "\n" ; 
    
        }*/

        question.displayQuestion();
        var userAnswer = prompt("Please select correct Answer !!");
        return userAnswer;
    
    }
    
    function isEndQuiz(userAnswer){
    
        return userAnswer === "stop"; 
    }
    

    
    function updateScore(){
        totalScore++;
    }

})();


function greet(person){


    return function (){

        console.log("Hellow !! ",person);
    }

}

//var greetCall = greet("Atul ");
//greetCall();


