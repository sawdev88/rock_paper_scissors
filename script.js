var compPickArr = ['Rock', 'Paper', 'Scissors'],
    userPick,
    compPick,
    winnerStr,
    randomNumber = Math.floor(Math.random() * compPickArr.length);

function compChoice() {
  compPick = compPickArr[randomNumber];
}

function winner(userPick, compPick){

  if (userPick === compPick) {
    winnerStr = 'Its a tie';
  } else if (userPick === 'Rock' && compPick === 'Scissors') {
    winnerStr = 'You Win';
  } else if (userPick === 'Paper' && compPick === 'Rock') {
    winnerStr = 'You Win';
  } else if (userPick === 'Scissors' && compPick === 'Paper') {
    winnerStr = 'You Win';
  } else {
    winnerStr = "You lose";
  }

}

$(function () {

  $('button').on('click', function () {
    userPick = $(this).val();
    compChoice();
    console.log('USER: ' + userPick + ' COMP: ' + compPick);

    winner(userPick, compPick);

    console.log(winnerStr);

  })


})
