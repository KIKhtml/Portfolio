// function changeImg(img){
//     document.querySelector('.starbucks').src = img
// }
// function changeCircle(color){
//     document.querySelector('.circle').style.background = color
// }

const click1 = document.getElementById('click1')
const click2 = document.getElementById('click2')
const click3 = document.getElementById('click3')

click1.onclick = () => {
    document.querySelector('.starbucks').src = './images/green.png'
    document.querySelector('.circle').style.background = 'green'

}

click2.onclick = () => {
    document.querySelector('.circle').style.background = 'pink'
    document.querySelector('.starbucks').src = './images/pink.png'
}

click3.onclick = () => {
    document.querySelector('.starbucks').src = './images/coffee.png'
    document.querySelector('.circle').style.background = 'brown'
}

