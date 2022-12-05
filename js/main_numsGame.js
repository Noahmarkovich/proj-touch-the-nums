'use strict'

var gNums 
var gBoardLen

var clickedNum = 1


function initGame(){
    clickedNum = 1
    var elReset = document.querySelector('.restart')
    elReset.style.display = 'none'
    gNums = createNums(16)
    gBoardLen = 4
    renderBoard(gNums)
}

function createNums(len) {
    var nums = []
    for(var i = 1; i<= len ; i++){
        nums.push(i)
    }
    return nums    
}


function drawNum() {
    var randIdx = getRandomInt(0, gNums.length)
    var num = gNums[randIdx]
    gNums.splice(randIdx, 1)
    return num
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function renderBoard(gNums) {
    var strHTML = ''
    for (var i = 0; i < gBoardLen ; i++) {
        //console.log(i)
        strHTML += '<tr>'
        //console.log(strHTML)
        for (var j = 0; j < gBoardLen ; j++) {
            var num = drawNum()
            strHTML += `<td data-i="${i}" data-j="${j}" onclick="onCellClicked(this,${num})" >${num}</td>`
        }
        strHTML += '</tr>'
    }
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function onCellClicked(elCell,num){
    var elTimer = document.querySelector('.timer')
    elTimer.innerHTML = `<div class="timer"> </div>`
    if (+num === clickedNum){
        elCell.classList.add('markedCell')
        clickedNum ++
    } else if (+num !== clickedNum) {
        alert('Wrong Number!')
    } if (+num === gBoardLen*gBoardLen){
        var elWin = document.querySelector('.restart')
        elWin.innerHTML = `<div class="restart"> YOU WON !! 
                            <button class="reset" onclick="initGame()"> Reset </button>
                           </div>`
        elWin.style.display = 'block'

    }
    // } if (+num === 1){
    //     elTimer.innerText = timerInterval()     
    //     //console.log(setInterval)
    //}
}
    // }if (+num === gNums.length ){
        //     clearInterval(intervalId)



function diffLevel(elLevel){
    clickedNum = 1
    var levelDiff = +elLevel.dataset.level
    gNums = createNums(levelDiff)
    gBoardLen = (gNums.length)** (0.5)
    renderBoard(gNums)
}


// function creatTimer() {
//     var timer = 0.000
//     console.log(timer += 0.001)
// }


// function timerInterval() {
//     var timer = 0.000
//     var intervalId = setInterval( function() {return (timer = timer+0.001)}, 1000)
// }




// function setSec() {
//     var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
// }