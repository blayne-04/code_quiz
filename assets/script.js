var startButton = $('#startbutton')
var hsButton = $('#viewhs')
var submitButton = $('#submitButton')
var backButton = $('#back')
var clearButton = $('#clearHS')
var player = $('#initials')
var score = 0
var topBar = $('.topbar')
var startMenu = $('.startmenu')
var questionContainer = $('.container')
var endCard = $('.endcard')
var leaderBoard = $('.leaderboard')
var timerEl = $('#timer')
var timeLeft = 5;

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + 'seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      endGame()
    }
  }, 1000);
}

  //click event listeners
  startButton.on('click', startGame);
  hsButton.on('click',leaderBoardEvent);
  submitButton.on('click', submitEvent);
  backButton.on('click', backEvent);
  clearButton.on('click',clearEvent);
  

  function leaderBoardEvent(){
    leaderBoard.removeClass('hide');
    topBar.addClass('hide');
    startMenu.addClass('hide');
    endCard.addClass('hide');
  }
  function backEvent(){
    topBar.removeClass('hide');
    startMenu.removeClass ('hide');
    leaderBoard.addClass('hide');
  }
  function submitEvent(){
    endCard.addclass('hide');
    leaderBoard.removeClass('hide');
  }

  function clearEvent(){
    $(".scores").children('<p>').remove
  }
//game functions
  function endGame(){
    questionContainer.addClass('hide')
    startMenu.addClass('hide')
    endCard.removeClass('hide')
  }
  function startGame(){
    startMenu.addClass('hide')
    hsButton.addClass('hide')
    questionContainer.removeClass('hide')
    countdown()
    setNextQuestion()
  }
  