const drinks = document.getElementById("drinks");


const colors = document.getElementByTagName("li");

for (let i = 0; i< list.length; i++){
    list[i].style.color = "orange";
}

console.log(list)


// const list = document.getElementByClassName("li");

// for (let i = 0; i< list.length; i++){
//     list[i].style.color = "orange";
// }

const no = document.getElementsByClassName("not-orange");

for (let i = 0; i < no.length; i++) {
no[i].style.color = "red";
}

const myList = document.getElementsByTagName("li");



const notOrangeList = document.getElementsByClassName("not-orange");

for (let i = 0; i < myList.length; i++) {
myList[i].style.color = "orange";
}

for (let i = 0; i < notOrangeList.length; i++) {
notOrangeList[i].style.color = "blue";
}

const myList = document.getElementsByTagName("li");

const notOrangeList = document.getElementsByClassName("not-orange");

for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = "orange";
}

for (let i = 0; i < notOrangeList.length; i++) {
    notOrangeList[i].style.color = "blue";
}