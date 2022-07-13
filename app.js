let output = document.querySelector(".output");
console.log(output.innerHTML);

const buttons = document.querySelectorAll(".btn");
// chars.forEach(element => console.log(element.innerHTML));
buttons.forEach(btn => {
  btn.addEventListener('click', event => {
    output.innerHTML += btn.innerHTML;
  })
})

function insertChar(btn){
    let char = btn.innerHTML;
    output.innerHTML += char
}

const backspace = document.querySelector(".backspace");
const space = document.querySelector(".space");
const shift = document.querySelector(".shift");
const shift2 = document.querySelector(".shift2");
const cancel = document.querySelector(".cancel");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");

backspace.addEventListener('click', event => {
    let str = output.innerHTML;
    let str2 = str.substring(0, str.length - 1);
    output.innerHTML = str2;

})
 
space.addEventListener('click', event => {
    output.innerHTML += " ";
})
shift2.addEventListener('click', event => {
    buttons.forEach(btn => {
        let button = btn.innerHTML;
        let buttonUp = button.toUpperCase();
        btn.innerHTML = buttonUp;
    })
})

shift.addEventListener('click', event => {
    buttons.forEach(btn => {
        let button = btn.innerHTML;
        let buttonUp = button.toUpperCase();
        btn.innerHTML = buttonUp;
    })
})
cancel.addEventListener('click', event => {
    buttons.forEach(btn => {
        let button = btn.innerHTML;
        let buttonUp = button.toLowerCase();
        btn.innerHTML = buttonUp;
    })
})

clear.addEventListener('click', event => {
    output.innerHTML = "";
})

enter.addEventListener('click', event => {
    output.innerHTML += `</br>`;
})