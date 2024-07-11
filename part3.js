console.log("Hello 3") 
//linked with index3.html 
// JS is synchronous 

//Callback and Callback hell : task was to change the heading 1 to One and respectively each after 1 sec 

// const heading1 = document.querySelector('.heading1')
// const heading2 = document.querySelector('.heading2')
// const heading3 = document.querySelector('.heading3')
// const heading4 = document.querySelector('.heading4')
// const heading5 = document.querySelector('.heading5')

// setTimeout(()=>{
// heading1.textContent = "One";
// heading1.style.color = "Violet"
// setTimeout(()=>{
// heading2.textContent = "Two";
// heading2.style.color = "purple"
// setTimeout(() => {
//     heading3.textContent = "three";
//     heading3.style.color = "red"
// setTimeout(()=>{
// heading4.textContent = "Four";
// heading4.style.color = "pink"
// setTimeout(()=>{
//     heading5.textContent = "Five"
//     heading5.style.color = "yellow"
// },1000)
// }, 1000)
// }, 2000);
// },1000)
// }, 1000)

        // Promises: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise is said to be settled if it is either fulfilled or rejected, but not pending.
const prom =  new Promise((resolve, reject) => { console.log("promise ") })