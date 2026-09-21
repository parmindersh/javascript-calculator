let digits = document.querySelectorAll(".digits");
let output = document.querySelector(".output");
let operations = document.querySelectorAll(".operations");
let clear = document.querySelector("#C");
let result = document.querySelector(".res");

for( let digit of digits){
        digit.addEventListener("click", ()=>{
        output.innerText += digit.id;
    })
}
for( let operation of operations){
        operation.addEventListener("click", ()=>{
        output.innerText += operation.id;
    })
}
clear.addEventListener("click",()=>{
    let curr = output.innerText;
    if(curr.length>0){
        output.innerText =curr.slice(0,-1)
    }
})
clear.addEventListener("auxclick",()=>{
    let curr = output.innerText;
    if(curr.length>0){
        output.innerText = "";
    }
})
clear.addEventListener("contextmenu",(event)=>{
    event.preventDefault();
})
result.addEventListener("click", ()=>{
    let res = new Function(`return ${output.innerText}`)();
    output.innerText = res
})
