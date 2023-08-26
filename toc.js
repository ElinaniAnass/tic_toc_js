const gameBoard = document.querySelector("#gameboard")
const info = document.querySelector("#info")
const startCells = [
    "","","","","","","","",""
]


function createBoard(){
    startCells.forEach((cell,index)=>{
        const cellElement= document.createElement('div')
        cellElement.classList.add('square') 
        cellElement.id=index
        cellElement.addEventListener('click',addGo)
        gameBoard.append(cellElement) 
    })
}
createBoard()
let go = 'circle'
info.textContent="Circle d'abord"
function addGo(e){
    const goDisplay= document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle"?"cross":"circle"
    info.textContent=`C'est le tour du ${go}`
    e.target.removeEventListener('click',addGo)
    checkScore()
}
function checkScore(){
    const allSquare=document.querySelectorAll(".square")
    const winner =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    winner.forEach(array =>{
        const circleWin = array.every(cell=>
            allSquare[cell].firstChild?.classList.contains('circle'))
            if(circleWin){
                info.textContent='Le vainqueur est circle'
                allSquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
                return
            }
    })
    winner.forEach(array =>{
        const crossWin = array.every(cell=>
            allSquare[cell].firstChild?.classList.contains('cross'))
            if(crossWin){
                info.textContent='Le vainqueur est cross'
                allSquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
                return
            }
    })
}
const button = document.querySelector('button')
button.onclick=function(){
    location.reload()
}