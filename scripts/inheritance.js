//personal challenge to review inheritance in js

var prototypeAnimal = {
    isAnimal : true,
    make: function(){
        console.log(this.species + "'s are strong wild animals.")
    }
}

var bear = Object.create(prototypeAnimal);

var tiger = Object.create(prototypeAnimal, {
    species : { value: 'Tiger' },
    color : { value: 'White' },
    millionsInWild : { value : 14 },
});

var duck = {
    Animal : 'duck'
}

var baby = Object.create(duck);
baby.name = "doodle"
baby.age = 4;

var baby2 = Object.create(duck, {
    name: {value:'tiny'},
    age: {value: 2},
})

var baby3 = {
    name: 'little',
    age: 5,
}

var dog = function(name, age){
    this.name = name;
    this.age = age;
}

dog.prototype.bark = function(){
    console.log('woof woof');
}

var baby4 = new dog('lomo', 2);
