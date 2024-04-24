// alert("js is linked")


class Tamagotchi {
    constructor(name) {
        this.name = name
        this.hunger = 100
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }
    
    feed() {
        if (this.hunger > 0 && this.hunger <= 100) {
            this.hunger -= 3
            document.getElementById("hunger").innerText = `Hunger: ${pet.hunger}`
        }
    }
    sleep() {

        if (this.sleepiness < 100 && this.sleepiness >= 0) {
            this.sleepiness -= 3
            document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
        }
    }
    play() {
        if (this.boredom > 0) {
            this.boredom -= 3
            document.getElementById("boredom").innerText = `Boredom: ${pet.boredom}`
        }
    }
    increaseAge() {
        this.age++
    }
    


}

let pet = new Tamagotchi("Fluffy")

document.getElementById("name").innerText = pet.name
document.getElementById("age").innerText = `Age: ${pet.age}`
document.getElementById("hunger").innerHTML = `Hunger: ${pet.hunger}`
document.getElementById("sleepiness").innerText = `Sleepiness: ${pet.sleepiness}`
document.getElementById("boredom").innerText = `Boredom: ${pet.boredom}`

document.getElementById("feed").addEventListener("click",function() {
    pet.feed()
})

document.getElementById("sleep").addEventListener("click", function() {
    pet.sleep()
})

document.getElementById("play").addEventListener("click", function () {
    pet.play()
})









