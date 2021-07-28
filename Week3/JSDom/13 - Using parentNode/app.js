let list = document.getElementById("list");

list.addEventListener("click", (event) =>{
const li = event.target;
const ul = li.parentNode;
ul.removeChild(li);
});