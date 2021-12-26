
const square = Array.from(document.querySelectorAll(".square"))
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left");
let hitPosition = 0
let clickPosition = 0
let score = document.querySelector("#score");
let result = 0 

let currentTime = timeLeft.innerText




function randomSquare(){
    square.forEach( className=> {
        className.classList.remove("mole")
    })
    let randomPosition = square[Math.floor(Math.random() * 9 )]
    randomPosition.classList.add('mole')


    //assign the id of the randomPosition to hitPosition for us to use

    hitPosition = randomPosition.id
    
}

square.forEach(el => {

    el.addEventListener('mouseup', () =>{
        clickPosition = el.id
        
        if(clickPosition === hitPosition){
            result = result + 1
            score.innerText = result
            
        }

    })
})

function moveMole(){

    let timerId = null; 
    timerId = setInterval(randomSquare, 500);
}


function countDown(){

    currentTime--
    timeLeft.innerText = currentTime

    if(currentTime === 0 ){
        clearInterval(timerId)
        alert("Game Over!, your final score is " + result)
    }
}

let timerId = setInterval(countDown, 1000)
moveMole()
