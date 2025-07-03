const gameBoard = document.getElementById("container");
const reset = document.getElementById("reset");
let player = 1;
let playerMove = "X";
let combos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]
let board = Array(9).fill("");
let gameOver = false;

gameBoard.querySelectorAll("div").forEach((div, index) => div.addEventListener('click', function(){
        if(div.innerHTML === ""){
            div.innerHTML = playerMove;
            board[index] = playerMove;
            checkIsOver();
            console.log(player);
            console.log(playerMove);
            console.log(gameOver);
            if(player % 2 == 0 && !gameOver){
                player = 1;
                playerMove = "X";
            }
            else{
                player = 2;
                playerMove = "O";
            }
            if(gameOver) clearBoard();
        }
        else{
            alert("You can't fill an already filled cell!");
        }
        
    }));



function clearBoard(){
    gameBoard.querySelectorAll("div").forEach(div =>{
        div.innerHTML = "";
    })
    player = 1;
    playerMove = "X";
    board = Array(9).fill("");
    gameOver = false;
}


function checkIsOver(){
    combos.forEach(combo =>{
        if(board[combo[0]] && board[combo[0]] == board[combo[1]] && board[combo[1]] == board[combo[2]]){
            gameOver = true;
            alert("Player "+ player +" wins!");
        }
        else if(!board.includes("")){
            gameOver = true;
            alert("It's a draw!");
        }
    });

}


