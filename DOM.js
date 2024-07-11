// console.log("Hello DOM")

// let button = document.getElementById("btn")
// let paragraph = document.getElementById("para")
// console.log(paragraph, button)
// button.innerHTML = "Come on!"
// paragraph.style.color = "White"
// paragraph.style.backgroundColor = "seagreen"
// let main = document.getElementsByClassName("main")
// console.log(main)

// const second = document.querySelector(".second")
// const newHeading = document.createElement('h1')
// newHeading.innerHTML = "I am new"

// paragraph.after(newHeading)


// when you try to select an element and print it we get something like <p id="para" style="color: white; background-color: seagreen;">This is para</p>
// but in reality if you check the typeof it you will see this is also an object 

// console.log(document.getRootNode()) // this gives us the entire web page sa the document node itself is called root node
// console.log(document.getRootNode().childNodes) // nodeList which will have HTML as the child of root node that is document 

// console.log(document.getRootNode().childNodes[1]) // nodelist can be indexed 

// const buttons = document.querySelectorAll('section button')
// console.log(buttons)
// console.log(buttons[0])

// buttons.forEach((button)=> {
//     button.addEventListener('click', (e)=>{
//         e.target.style.color = "gray"
//         e.target.style.backgroundColor = "yellow"
//     })
// })

   // Task: on click of the button the body should give us random color 


//    const body = document.querySelector('body')

//    function random (){
//     let color;
//   const red = Math.floor(Math.random()*256)
//    const green = Math.floor(Math.random()*256) 
//    const blue = Math.floor(Math.random()*256)
//    color = `rgb(${red},${green},${blue})`
//   console.log(color)
//    return color
//    }
//    buttons.forEach((button)=> {
//     button.addEventListener('click', (e)=>{
//         body.style.background = random();
//         console.log(button.style.background)
//     })
// })

// body.addEventListener('keydown', (e)=>{
// paragraph.textContent = `You press the key: ${e.key}`
// })