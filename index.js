const increasebtn=document.getElementById("increaseBtn");
const decreasebtn=document.getElementById("decreaseBtn");
const resetbtn=document.getElementById("resetBtn");
const textLabel=document.getElementById("label");

let count=0;

increasebtn.onclick=function(){
    count++;
    textLabel.textContent=count;

}
decreasebtn.onclick=function(){
    count--;
    textLabel.textContent=count;

}
resetbtn.onclick=function(){
    count=0;
    textLabel.textContent=count;

}
