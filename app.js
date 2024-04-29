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
        if (this.hunger > 0 && this.hunger <= 10) {
            this.hunger += 1
            this.sleepiness += 1
            
            document.getElementById("hunger").innerText = `Hunger: ${pet.hunger}`
            document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
        }
    }
    sleep() {

        if (this.sleepiness < 10 && this.sleepiness >= 0) {
            this.sleepiness -= 1
            document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
        }
    }
    play() {
        if (this.boredom >= 0) {
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




setInterval(function() {
    pet.hunger --
    pet.boredom ++
    updateStats()
},9000)

setInterval(function() {
    pet.sleepiness ++
    updateStats()
},14000)

setInterval(function() {
    pet.age ++
    updateStats()
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











