var startButton = $('#startbutton')
var hsButton = $('#viewhs')
var submitButton
var topBar = $('.topbar')
var startMenu = $('.startmenu')
var questionContainer = $('.container')
var endCard = $('.endcard')
var leaderBoard = $('.leaderboard')
var timerEl = $('#timer')
var timeLeft = 60;


function countdown() {

    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        endcard();
      }
    }, 1000);
  }
  countdown()

  startButton.on('click', startGame)
  hsButton.on('click',leaderBoardEvent)
  submitButton.on('click', submitEvent)
  
  function submitEvent(){
    var submission = $('<li>')
    submission.text = 
    submission.append
  }
  function leaderBoardEvent(){
    
  }
  function startGame(){
    startMenu.addClass('hide')
    questionContainer.removeClass('hide')
  }
  