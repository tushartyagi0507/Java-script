console.log("hello event")

const container = document.querySelector(".container")

function random(){
    const red = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const color = `rgb(${red},${blue},${green})`
    console.log(color)
    return color
}

container.addEventListener('click', (e)=>{
e.target.style.background = random();
})