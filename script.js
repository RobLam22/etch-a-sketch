const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)

const makeGrid = () => {
    for (i = 0; i < 4; i++) {
        const div = document.createElement('div')
        div.id = 'row'
        for (j = 0; j < 4; j++) {
            const square = document.createElement('div')
            square.classList.add('square')
            div.appendChild(square)
        }
        container.appendChild(div)
    }
}

makeGrid()
