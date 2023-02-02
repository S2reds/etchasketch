const squareBox = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    document.querySelector('#container').appendChild(square)
}

const changeGrid = document.querySelector('button')
changeGrid.addEventListener('click', () => {
    let gridsize = +prompt('How many squares per side?')
    if (gridsize > 100) +prompt('Pick a number under 100')
    gridsize2 = gridsize * gridsize
    let containersize = gridsize * 16
    squareBox.style.width = `${containersize}px`
    squareBox.style.height = `${containersize}px`
    squareBox.innerHTML = '';
    for (let i = 0; i < gridsize2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        document.querySelector('#container').appendChild(square);
        }
    });


    
    squareBox.addEventListener('mouseover', function(e) {
        if (e.target.matches('.square')) {
            e.target.classList.add('hovered')
        }
    });
    
    
    const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    const box = document.querySelectorAll('.square')
    box.forEach(b => b.classList.remove('hovered'))
})

