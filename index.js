const gameinfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
const squareBox = document.querySelector(".tic-tac-toe");

let currPlayer = "X";
let mapping = ["","","","","","","","",""];
let btnClicked = 0;
init();

let win = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];


function init(){
    squareBox.classList.remove("lose");
    currPlayer = "X";
    btnClicked = 0;
    mapping = ["","","","","","","","",""];
    gameinfo.innerText = (`Current Player - ${currPlayer}`) ;
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("win");
        box.classList.remove("lose");
        box.style.pointerEvents = "all";
    });
    btn.classList.remove("active");
}

function gameOver(){
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
    btn.classList.add("active");
}
        

function CheckgameOver(){
    let loopWorked = 0;
    win.forEach((ele) =>{
        if (mapping[ele[0]] === "X" && mapping[ele[1]] === "X" && mapping[ele[2]] ===  "X") {
            boxes[ele[0]].classList.add("win");
            boxes[ele[2]].classList.add("win");
            boxes[ele[1]].classList.add("win");
            gameOver();
            gameinfo.innerText = (`Winner Player - X`)

            loopWorked = 1;
            
        }
        else if (mapping[ele[0]] === "O" && mapping[ele[1]] === "O" && mapping[ele[2]] ===  "O") {
            boxes[ele[0]].classList.add("win");
            boxes[ele[2]].classList.add("win");
            boxes[ele[1]].classList.add("win");
            gameOver();
         
            gameinfo.innerText = (`Winner Player - O`)
            loopWorked = 1;
        }
    
        
    });

    if(loopWorked === 0){
        if(btnClicked === 9){
            gameOver();
            squareBox.classList.add("lose");
            gameinfo.innerText = (`Game Tied !`);
            
                
        }
    }
   
}

boxes.forEach((box,key) =>{
    box.addEventListener("click",() =>{
        btnClicked++;
        box.innerText =  `${currPlayer}`; 
        mapping[key] = currPlayer;
        
      
        box.style.pointerEvents = "none";
      
        currPlayer = (currPlayer === "X") ? "O" : "X";
      gameinfo.innerText = (`Current Player - ${currPlayer}`) ;
      CheckgameOver();
    });
});

btn.addEventListener("click",init);