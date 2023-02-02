const squareBox = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    document.querySelector('#container').appendChild(square)
}