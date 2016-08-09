var $winnerText = $('.winner-text'),
    $compText = $('.comp-text'),
    userScore = 0,
    compScore = 0,
    winnerStr,
    areYouAWinner;

//Computer makes game choice
function compChoice(item) {
    compPickArr = ['Rock', 'Paper', 'Scissors']
    compPick = compPickArr[Math.floor(Math.random() * compPickArr.length)];
}

// Get winner between user and comp
function winner(userPick, compPick) {
  var userPick,
      compPick;

    if (userPick === compPick) {
        winnerStr = 'Tie';
        areYouAWinner = null;
    } else if (userPick === 'Rock' && compPick === 'Scissors') {
        winnerStr = 'Win';
        areYouAWinner = true;
    } else if (userPick === 'Paper' && compPick === 'Rock') {
        winnerStr = 'Win';
        areYouAWinner = true;
    } else if (userPick === 'Scissors' && compPick === 'Paper') {
        winnerStr = 'Win';
        areYouAWinner = true;
    } else {
        winnerStr = "loser";
        areYouAWinner = false;
    }
}

//get user pick and display comp pick
function makePick() {
    $('.play').on('click', function() {
        userPick = $(this).val();
        compChoice();

        winner(userPick, compPick);
        $winnerText.text(winnerStr)
        $compText.text('Computer picked: ' + compPick);

        if ($compText.text().length > 0) {
            $('.play').attr('disabled', 'disabled');
            $('.play-again').fadeIn();
            compChoice();
        }
    })
};

$(function() {

  makePick();
    // Show play again button when round is over and reset game for next round
    $('.play-again').on('click', function() {
      var $userScoreText = $('.user-score-text'),
          $compScoreText = $('.comp-score-text');

        $('.play').removeAttr('disabled');
        $compText.text('');
        $(this).hide();
        if (areYouAWinner) {
            ++userScore;
            $winnerText.text('Nice Win. Keep it going.');
            $userScoreText.text(userScore);
        } else if (areYouAWinner === false) {
            ++compScore;
            $winnerText.text('Tough loss. Get a win this time.');
            $compScoreText.text(compScore);
        } else {
            $winnerText.text('Ties are okay. Get \'em this time');
        }
        makePick();
    })

})
