let counterVal = document.querySelector("#count");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let input = document.querySelector("input");
let reset = document.querySelector("#reset");
let count = 0;
let userVal  = Number(input.value);

input.addEventListener("input", ()=>{
    userVal = Number(input.value);
});

sub.addEventListener("click", ()=> { 
    count = count - userVal;
    counterVal.textContent = count;
});

add.addEventListener("click", ()=> {
    count = count + userVal;
    counterVal.textContent = count;
});

reset.addEventListener("click", ()=> {
    count = 0;
    counterVal.textContent = 0;
});