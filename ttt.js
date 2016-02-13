$(document).on('ready', function() {
  var turn = 0;
  var winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  var oArray = [0,0,0,0,0,0,0,0,0];
  var xArray = [0,0,0,0,0,0,0,0,0];
  $('td').one('click', function() {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    var self = $(this);

    // 0 % 2 === 0
    // 1 % 2 === 1
    // 2 % 2 === 0

    if (turn % 2) {
      // $ sign is function, want to avoid calling repeatly
      self.html("O").addClass('o');
      oArray[parseInt(self.attr('value')) - 1] = parseInt(self.attr('name'));
    } else {
      self.html("X").addClass('x');
      xArray[parseInt(self.attr('value')) - 1] = parseInt(self.attr('name'));

    }

    checkForWinner(turn);
    checkForDraw(turn);


    turn++;
  });

  function checkSum15(array, row){
    var sum  = (array[row[0]-1]+array[row[1]-1]+array[row[2]-1]);
    return sum === 15;
  }

  function checkForWinner() {
    //$('.x')
    var currentArray;
    if (turn % 2){
      currentArray = oArray;
    } else {
      currentArray = xArray;
    }


    for (var i = 0; i < winningCombos.length; i++) {
      if (checkSum15(currentArray, winningCombos[i])) {
        alert("Player Wins! Let's play again!");
        location.reload();
        return true;
      }
    }
  }

  function checkForDraw(turn) {
    // turn starts at 0
    if (turn === 8) {
      alert("Players Draw! Let's play again!");
      location.reload();
    }
  }


});
