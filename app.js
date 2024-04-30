// alert("js is linked")


class Tamagotchi {
    constructor(name) {
        this.name = name
        this.hunger = 10
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }
    feed() {
        if (this.hunger > 0 && this.hunger <= 9) {
            this.hunger += 1
            this.sleepiness += 1
            
            document.getElementById("hunger").innerText = `Hunger: ${pet.hunger}`
            document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
        }
    }
    sleep() {

        if (this.sleepiness < 10 && this.sleepiness >= 1) {
            this.sleepiness -= 3
            document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
        }
    }
    play() {
        if (this.boredom >= 1) {
            this.boredom -= 1
            this.hunger -= 1
            document.getElementById("boredom").innerText = `Boredom: ${pet.boredom}`
            document.getElementById("hunger").innerText = `Hunger: ${pet.hunger}`
        }
    }
    
}

let pet = new Tamagotchi(prompt ("What is your pet's name? "))






document.getElementById("name").innerText = pet.name


function updateStats() {
    document.getElementById("hunger").innerText = `Hunger: ${pet.hunger}`
    document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
    document.getElementById("boredom").innerText = `Boredom: ${pet.boredom}`
    document.getElementById("age").innerText = `Age: ${pet.age}`
}

function deathAlert() {
    if ((pet.hunger === 0) || (pet.boredom === 10) || (pet.sleepiness === 10)) {
        alert("Oh no your pet has died!")
    }
}

let img = document.getElementById("pikachu")


setInterval(function() {
    pet.age ++
    updateStats()
    if (pet.age === 4) {
        alert("Your pet in now evolving!!")
            img.style.width = "100px"
            img.style.height = "100px"
        }
    if (pet.age === 8) {
        alert("Your pet is in its final evolution!!")
            img.style.width = "200px"
            img.style.height = "300px"
        }
    },21000)

setInterval(function() {
    pet.hunger --
    pet.boredom ++
    updateStats()
    deathAlert()
},7000)

setInterval(function() {
    pet.sleepiness ++
    updateStats()
    deathAlert()
},18000)




document.getElementById("feed").addEventListener("click", function () {
    pet.feed()
})

document.getElementById("sleep").addEventListener("click", function () {
    pet.sleep(); {
        let body = document.body
        body.classList.toggle("dark-mode")
    }
})

document.getElementById("play").addEventListener("click", function () {
    pet.play()
})

document.getElementById("modeSwitch").addEventListener("click",function () {
    let body = document.body
    body.classList.toggle("dark-mode")
})











