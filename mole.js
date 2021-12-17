// const body = document.querySelector("#background")
const squares = document.querySelectorAll(".grid")
const moles = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time")
const score = document.querySelector("#score")
const newGame = document.querySelector("#new_game")
const welcome = document.querySelector("#welcome")
newGame.addEventListener("click", render)
let buttonClicked =0
const baseTextScore = "Score: " 
const baseTextTime = "Time Left: "
let hitId
let result =0
let currentTime =30
score.textContent = baseTextScore+result
timeLeft.textContent = baseTextTime+currentTime
let position_clicked =[]
squares.forEach(square=>{
    square.addEventListener("click",()=>{
        if(square.id ===hitId&&!position_clicked.includes(hitId)){
            result++
            position_clicked.push(hitId)
            score.textContent = baseTextScore+result
        }
    })
})
function randomSquare(){
    squares.forEach(square=>{
        square.classList.remove('mole')  
    })
    let rsquare = Math.floor(Math.random()*25)
    let molesquare = squares[rsquare]
    console.log("id "+molesquare.id)
    molesquare.classList.add("mole")
    hitId = molesquare.id
    position_clicked=[]
} 
function countDown(){
    currentTime--
    timeLeft.textContent = baseTextTime+currentTime
    if(currentTime===0){
        timeLeft.textContent = baseTextTime+currentTime
        clearInterval(timerID)
        clearInterval(moveMole)
        welcome.textContent="Time is up! click new game button to start a new game!"
        welcome.style.display = "initial"
        buttonClicked=0
    }
}
function render(){
    buttonClicked++
    if(buttonClicked===1){
        welcome.style.display = "none"
        currentTime=30
        result = 0
        moveMole = setInterval(randomSquare,800)
        timerID = setInterval(countDown,1000)
    }
    
}


