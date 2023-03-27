const divGenerator = document.querySelector('.divGenerator');
divGenerator.addEventListener('click', () => {
    createGrid()
})

function createGrid() {
      const dimentions = prompt("jaki bok wariacie")
    const grid = document.querySelector('.container')
    for (let i=0; i<(dimentions*dimentions); i++) {

        const gridContent = document.createElement('div')
        gridContent.classList.add('sketch')
        grid.appendChild(gridContent)
    }
}