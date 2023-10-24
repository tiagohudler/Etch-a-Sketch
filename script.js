function addDivs() {
    let input = document.querySelector('input').value;
    let drawpad = document.createElement('div');
    let body = document.querySelector('body');
    //adds the drawpad space
    drawpad.setAttribute('id', 'drawpad');
    drawpad.style.width = `${input * 5}px`;
    body.appendChild(drawpad);
    //adds the grid
    let blockNumber = input*input;
    for (let i = 0; i < blockNumber; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        drawpad.appendChild(box);
    }

}
//adds button event listener
const button = document.querySelector('button');
button.addEventListener('click', () => {
    addDivs();
    document.querySelector('input').value = '';
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            elem.style.backgroundColor = 'black';
        });
    });
});

