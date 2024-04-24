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
        if (this.hunger < 100) {
            this.hunger += 3
        }
    }
    sleep() {

        if (this.sleepiness < 100 && this.sleepiness > 0) {
            this.sleepiness -= 3
        }
    }
    play() {
        if (this.boredom > 0) {
            this.boredom -= 3
        }
    }
    increaseAge() {
        this.age++
    }
    changeAll() {
        if(this.hunger < 100)
        this.hunger ++

        this.sleepiness ++
        this.boredom ++
    }


}

let pet = new Tamagotchi("Fluffy")

document.getElementById("name").innerText = pet.name
document.getElementById("age").innerText = `Age: ${pet.age}`
document.getElementById("hunger").innerText = `Hunger: ${pet.hunger}`
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









