let petContainer = document.querySelector("#petcontainer")
let methodContainer = document.querySelector("#methodscontainer")
let sleepingPet = document.querySelector(".sleepingPet");

//buttons
let selectDog = document.querySelector("#dogbtn")
let selectCat = document.querySelector("#catbtn")
let selectSnake = document.querySelector("#snakebtn")
let petImgs = document.querySelector("#petimgs")


//images

let petName = document.querySelector("#petname")
let snakeImg = document.querySelector("#snakeimg")
let dogImg = document.querySelector("#dogimg")
let catImg = document.querySelector("#catimg")
let P;

//progress bar
let progressBars = document.querySelector("#progressbars")

methodContainer.style.display = "none"
progressBars.style.display = "none"



selectDog.addEventListener("click", () => {
    P = new Dog(prompt("What is your Dogs name going to be?"));
    methodContainer.style.display = "block"
    snakeImg.style.display = "none"
    catImg.style.display = "none"
    progressBars.style.display = "block"
    petContainer.style.display = "none"
    petName.textContent = `${P.name}`;
});

selectSnake.addEventListener("click", () => {
    P = new Snake(prompt("What is your Snakes name going to be?"));
    methodContainer.style.display = "block"
    petContainer.style.display = "none"
    dogImg.style.display = "none"
    catImg.style.display = "none"
    progressBars.style.display = "block"
    petName.textContent = `${P.name}`;
});

selectCat.addEventListener("click", () => {
    P = new Cat(prompt("What is your Cats name going to be?"));
    methodContainer.style.display = "block"
    dogImg.style.display = "none"
    snakeImg.style.display = "none"
    petContainer.style.display = "none"
    progressBars.style.display = "block"
    petName.textContent = `${P.name}`;
});

//Actions 

let giveFood = document.querySelector("#feedbtn")
let giveDrink = document.querySelector("#drinkbtn")
let petPlay = document.querySelector("#playbtn")
let petSleep = document.querySelector("#sleepbtn")
let petToilet = document.querySelector("#toiletbtn")

giveFood.addEventListener("click", () => {
    hungerBar.value += 20;
    toiletBar.value -= 10;
})

giveDrink.addEventListener("click", () => {
    thirstBar.value += 20;
    toiletBar.value -= 10;
})

petPlay.addEventListener("click", () => {
    energyBar.value -= 10;
    boredomBar.value += 10;
})

petSleep.addEventListener("click", () =>{
    energyBar.value += 20
})

petToilet.addEventListener("click", () =>{
    toiletBar.value += 20
})

//progress bars

let hungerBar = document.querySelector("#hungerbar")
let thirstBar = document.querySelector("#thirstbar")
let energyBar = document.querySelector("#energybar")
let boredomBar = document.querySelector("#boredbar")
let toiletBar = document.querySelector("#toiletbar")

hungerBar.value = 100;
thirstBar.value = 100;
energyBar.value = 100;
boredomBar.value = 100;
toiletBar.value = 100;

let hunger = setInterval(() => {
    hungerBar.value--;
}, 200);

let thirst = setInterval(() => {
    thirstBar.value--;
}, 222);

let energy = setInterval(() => {
    energyBar.value--;
}, 300);

let bored = setInterval(() => {
    boredomBar.value--;
}, 300);

let toilet = setInterval(() => {
    toiletBar.value--;
},400)


if (hungerBar.value < 1) {
    alert("Your pet died from starvation");
} else {
    if (thirstBar.value < 1){
        alert("Your pet died of thirst")
    } else {
        if (energyBar.value < 1){
            alert("Your pet died from exhaustion")
        }else{
            if (boredomBar.value <= 1){
                alert("Your pet died of boredom")
            }
        }
    }

}