const input = document.getElementById("input");
const button = document.getElementById("submit");const toggle = document.getElementByID("showhide-btn");
const list = document.getElementsByTagName("ul")[0];

button.addEventListener("click",()=>{
let listItem=document.createElement("li");
listItem.textContent= input.value;
console.log(listItem);
list.appendChild(listItems);
input.value = "";
})