class Animal {
    constructor(name, type, age, size, isEaten){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = isEaten;
    }

    eat(animal, animalTwo){
        
        if(animalTwo.ifItsAnimal === "Animal" && animal.type === "Herbivore"){

            console.log(`The animal ${animal.name} is a herbivore and does not eat other animals`)

        }else if(animalTwo.ifItsAnimal === "Animal" && animal.type !== "Herbivore"){

            animalTwo.isEaten === true
            console.log(`The animal ${animalTwo.name} ate the ${animal.name} `)

        } else if(animalTwo.size >  animal.size ){

            console.log(`The animal ${animal.name} tried to eat ${animalTwo.name} but it was too large`)

        } else if(animalTwo.ifItsAnimal !== "Animal"){

            console.log(`The animal ${animal} is eating ${animalTwo}`)
        }
    }
};

let firstAnimal = new Animal("Cheetah", "Carnivore", 6, 4, false)
console.log(firstAnimal)

let secondAnimal = new Animal("Bear", "Omnivores", 8, 8, false)
secondAnimal.ifItsAnimal = "Animal"
console.log(secondAnimal)

firstAnimal.eat(firstAnimal, secondAnimal)

