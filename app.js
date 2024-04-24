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


}






