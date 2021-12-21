//clear
document.querySelector('#clear').addEventListener('click', ()=> {
   document.querySelector("#display").value = ' ';
})
// backspace function
const backSpace = () =>{
    const num = document.querySelector("#display").value.slice(0, -1)
    document.querySelector("#display").value = num
}