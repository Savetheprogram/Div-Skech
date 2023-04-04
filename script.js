const divGenerator = document.querySelector('.divGenerator');
divGenerator.addEventListener('click', () => {
    createGrid()
})
let buttonPressCounter = 0
let gridContent = 0
let grid = document.querySelector('.container')

function createGrid() {
      let dimensions = prompt("jaki bok wariacie (max 100)")
    if (dimensions>100 || dimensions<0){
    for (let i =dimensions; i>100 || i<0; i=dimensions ) {
      let newDimensions = prompt("Podaj poprawną wartość (max 100)");
        dimensions=newDimensions;
    }}

    if (buttonPressCounter > 0) {
        const elements = document.getElementsByClassName('sketch');
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        grid.style.height = +dimensions * 5 +"px"
        grid.style.width = +dimensions * 5 +"px"
        for (let i=0; i<(dimensions*dimensions); i++) {
            gridContent = document.createElement('div')
            gridContent.classList.add('sketch')
            grid.appendChild(gridContent)
        }
        buttonPressCounter +=1
    } else {
    grid.style.height = +dimensions * 5 +"px"
    grid.style.width = +dimensions * 5 +"px"
    for (let i=0; i<(dimensions*dimensions); i++) {
        gridContent = document.createElement('div')
        gridContent.classList.add('sketch')
        grid.appendChild(gridContent)
    }
        buttonPressCounter +=1
    }
}

const drawButton = document.querySelector('.drawButton')
drawButton.addEventListener('click', () => {drawing()})



    function drawing() {

        const drawDivs = document.querySelectorAll('.sketch');
    for (let i=0; i<drawDivs.length; i++) {
        drawDivs[i].addEventListener('mouseenter', () => {
            drawDivs[i].classList.add('paint')})
    }

    }







