// function changeImg(img){
//     document.querySelector('.starbucks').src = img
// }
// function changeCircle(color){
//     document.querySelector('.circle').style.background = color
// }

const click1 = document.getElementById('click1')
const click2 = document.getElementById('click2')
const click3 = document.getElementById('click3')
const click4 = document.getElementById('click4')
const click5 = document.getElementById('click5')

click1.onclick = () => {
    document.querySelector('.starbucks').src = './images/greenBT.png'
    document.querySelector('.circle').style.background = '#D0EF98'

}

click2.onclick = () => {
    document.querySelector('.starbucks').src = './images/yellowBT.png'
    document.querySelector('.circle').style.background = '#EEEF98'
}

click3.onclick = () => {
    document.querySelector('.starbucks').src = './images/orangeBT.png'
    document.querySelector('.circle').style.background = '#EFBE98'
}

click4.onclick = () => {
    document.querySelector('.starbucks').src = './images/greenlemonBT.png'
    document.querySelector('.circle').style.background = '#EEEF98'
}

click5.onclick = () => {
    document.querySelector('.starbucks').src = './images/yellowlemonBT.png'
    document.querySelector('.circle').style.background = '#EFE798'
}

