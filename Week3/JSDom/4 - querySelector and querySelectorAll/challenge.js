//cycle over the list items and apply colors from the array called colours
// const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

// document.querySelectorAll("li");
// document.querySelector("li");

// document.querySelector("heading");

// document.querySelectorAll(".list-parent");
// document.querySelectorAll(".green");
// //  class is .

const listItems = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i <listItems.length; i++ ){
    listItems[i].style.color= "lightgreen";
}

