var current_player ="0";

var board = [["", "", ""], ["", "", ""], ["", "", ""]]
var x = 0;
var y = 0;
for(x = 0; x < 3; x++){
  for(y = 0; y < 3; y++){
    board[x][y] = document.getElementById(`${x + 1}${y +1}`);
  }
}
function checkCol(){
  var x = 0;
  for(x = 0; x < 3; x ++){
    if(board[x][col].innerText != current_player){
      return false;
    }
  }
  return true;
}
function checkRow(){
  var x = 0;
  for(x = 0; x < 3; x ++){
    if(board[row][x].innerText != current_player){
      return false;
    }
  }
  return true;

  function checkDia(){
    var diagonal1 = boad[0][0].innerHTML === player && board[1][1].innerHTML
    === player && board[2][2].innerHTML === player;
    var diagonal2 = board[0][2].innerHTML === player && board[1][1].innerHTML
    return diagonal1 || diagonal2
  }

function checkWin(){
  var i = 0;
  for(i = 0; i <3; i++){
    if(checkCol(i) || checkRow(i)){
      return true;
    }
  }
  return checkDia(){

  }
}

function turn(){
  console.log(event.target.innerText);
  if(event.target.innerText === ""){
    event.target.innerText = current_player;
    if (checkWin()){
      document.body.innerHTML = `<center id="winner">${current_player} wins!</center>`;
    }
  }
    else{
      current_player= current_player === "X" ? "0" : "X";
  }
  else {

}
}
