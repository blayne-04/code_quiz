//global variable declarations
var score = 0
var startMenu = $('.startmenu')
var endCard = $('.endcard')
var leaderBoard = $('.leaderboard')
var timerEl = $('#timer')
var timeLeft = 60;

//timer for the top of the screen
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.text (timeLeft + ' seconds remaining');
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.text (timeLeft + ' second remaining');
      timeLeft--;
    } else {
      timerEl.text ('');
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

  //click event listeners
  $('#startbutton').on('click', startGame);
  $('#viewhs').on('click',leaderBoardEvent);
  $('#submitButton').on('click', submitEvent);
  $('#back').on('click', backEvent);
  $('#clearHS').on('click',clearEvent);
  $('.answers').on('click', checkAnswer);
  
//button event functions
  function leaderBoardEvent(){
    leaderBoard.removeClass('hide');
    startMenu.addClass('hide');
    endCard.addClass('hide');
    displayScores()
  }
  function backEvent(){
    startMenu.removeClass ('hide');
    leaderBoard.addClass('hide');
  }
  function submitEvent(){
    endCard.addClass('hide');
    leaderBoard.removeClass('hide');
    var gameData = {
      name: ($('#initials').val()),
      score: (score)
    };
    localStorage.setItem("gameData", JSON.stringify(gameData));
    displayScores();
  }
function displayScores(){
  var lbData = JSON.parse(localStorage.getItem("gameData"));
  const scoreDisplay = $('<p>').text(`${lbData.name}: ${lbData.score}`);
  $(".scores").append(scoreDisplay);
}
  function clearEvent(){
    $(".scores").children().remove();
    localStorage.clear();
  }

  const questions = [ 
    {
      question: 'Whats the first month of the year:',
      answers: [
        {text: 'February', correct: false},
        {text: 'June', correct: false},
        {text: 'January', correct: true},
      ]
    },
    {
      question: 'Whats the primary food of pandas',
      answers: [
        {text: 'Bamboo', correct: true},
        {text: 'Meat', correct: false},
        {text: 'Insects', correct: false},
      ]
    },
    {
      question: 'Whats your brain primarily made of',
      answers:[
        {text: 'Water', correct: false},
        {text: 'Protein', correct: false},
        {text: 'Fat', correct: true},
      ]
    },
    {
      question: 'Which planet is closest to the sun?',
      answers: [
        {text: 'Earth', correct: false},
        {text: 'Mercury', correct: true},
        {text: 'Venus', correct: false},
      ]
    },
    {
      question: 'How many Infinity Stones are there?',
      answers: [
        {text: '5', correct: true},
        {text: '6', correct: true},
        {text: '10', correct: false},
      ]
    },
    {
      question:'What is the only food in this list that cannot go bad?',
      answers: [
        {text: 'Dark Chocolate', correct: false},
        {text:'Honey', correct: true},
        {text:'Peanut Butter', correct: false},
      ]
    },
    {
      question:'What is the most visited tourist attraction in the world?',
      answers: [
        {text:'Statue Of Liberty', correct: false},
        {text:'Colosseum', correct: false},
        {text:'Eiffel Tower', correct: true},
      ]
    },
    {
      question:'What’s the heaviest organ in the human body?',
      answers: [
        {text:'Heart',correct: false},
        {text:'Liver',correct: true},
        {text:'Skin',correct: false},
      ]
    },
    {
      question:'What type of food holds the world record for being the most stolen around the globe?',
      answers: [
        {text:'Cheese',correct: true},
        {text:'Coffee',correct: false},
        {text:'Chocolate',correct: false},
      ]
    },
    {
      question:'What element does the chemical symbol Au stand for',
      answers: [
        {text:'Silver',correct: false},
        {text:'Salt',correct: false},
        {text:'Gold',correct: true},
      ]
    },
    {
      question:'What is the highest-grossing Broadway show of all time?',
      answers: [
        {text:'The Lion King',correct: true},
        {text:'Hamilton',correct: false},
        {text:'Wicked',correct: false},
      ]
    },
  ]

//game functions
//function to end the game and display your score 
  function endGame(){
    $('.container').addClass('hide');
    startMenu.addClass('hide');
    endCard.removeClass('hide');
    $('#score').text('Your Final Score Was ' + score)
  }
  //function to start the game
  function startGame(){
    countdown();
    startMenu.addClass('hide');
    $('#viewhs').addClass('hide');
    $('.container').removeClass('hide');
    setNextQuestion();
  }
  //function to set next question after answering
  var QI = 0; //Question Index
  function setNextQuestion(){
    if (QI < questions.length){
      $('#question').text(questions[QI].question)
      for (var i = 0; i < 3; i++) {
        $('#answers-' + i)
          .text(questions[QI].answers[i].text)
          .attr('correct', questions[QI].answers[i].correct);
      }
      QI++
     } else{
      endGame();
     }
  }
  //function to check answers for true or false and add score accordingly
  function checkAnswer(){
    var correctSelect = event.target.getAttribute('correct')
console.log(correctSelect)
  if (correctSelect === 'true'){
    $('#indicator').text('correct')
    score++
  }else{
    $('#indicator').text('incorrect')
  }
  setNextQuestion()
}
