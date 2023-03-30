const divGenerator = document.querySelector('.divGenerator');
divGenerator.addEventListener('click', () => {
    createGrid()
})

function createGrid() {
      let dimensions = prompt("jaki bok wariacie (max 100)")
    if (dimensions>100 || dimensions<0){
    for (let i =dimensions; i>100 || i<0; i=dimensions ) {
      let newDimensions = prompt("Podaj poprawną wartość (max 100)");
        dimensions=newDimensions;
    }}
    const removeGrid = document.querySelector('.container')
        for (let i=0; i<(dimensions*dimensions); i++) {
            const removeGridContent = document.getElementsByClassName('sketch')
            removeGridContent.remove()
        }

    const grid = document.querySelector('.container')
    grid.style.height = +dimensions * 7 +"px"
    grid.style.width = +dimensions * 7 +"px"
    for (let i=0; i<(dimensions*dimensions); i++) {
        const gridContent = document.createElement('div')
        gridContent.classList.add('sketch')
        grid.appendChild(gridContent)
    }
}