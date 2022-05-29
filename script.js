const DisplayBox = document.querySelector(".display");
const list =document.querySelectorAll(".show-display");

document.querySelector(".All-clear").addEventListener("click" , Allclear);
document.querySelector(".last-clear").addEventListener("click",lastclear);
document.querySelector(".cal").addEventListener("click" , cal);

list.forEach((item)=>{
    item.addEventListener("click" , ShowDisplay)
})

function ShowDisplay(event){
    const x = event.target.innerText;
    if(DisplayBox.innerHTML == 0){
        return DisplayBox.innerHTML = x;
    }else{
        return DisplayBox.innerHTML += x;
    }
}

function Allclear(){
    DisplayBox.innerText = 0;
}

function lastclear(){
    let text = DisplayBox.innerText;
    if(text.length === 1){
        DisplayBox.innerHTML = 0;
    }else{
        DisplayBox.innerHTML = text.substring(0,text.length-1);
    }
}

function cal(){
    const result = DisplayBox.innerText;
    DisplayBox.innerText = eval(result);
}


