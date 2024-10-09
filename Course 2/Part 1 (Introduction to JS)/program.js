/* class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log("Lights are " + (this.lightsOn ? "on" : "off"));
    }
    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;        
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High speed is " + (this.highSpeedOn ? "on" : "off"));
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational");
    }
}

var train = new Train("blue", false);
var highSpeedTrain = new HighSpeedTrain(200, false, "green", false);

train.toggleLights();
train.lightsStatus();

highSpeedTrain.toggleLights();

train.getPrototype();
highSpeedTrain.getPrototype(); */
/* class Animal {
    constructor(color , energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        return this.energy > 0;
    }
    sleep(){
        this.energy++;
    }
    getColor(){
        return this.color;
    }

}

class Cat extends Animal {
    constructor(){
        super();
    }
} */
/* // Task 1: Code a Person class 
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(energy) {
        this.energy += 10;
    }
    doSomethingFun(energy) {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age,energy, xp =0, hourlyWage = 10) {
        super(name,age,energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork(xp){ 
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork(intern.xp);
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker("Alice", 30, 120,100, 30);
    manager.doSomethingFun();
    return manager;
} */
/* const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

//------------unreliable----------------
//const sportsCar = new Object(car);

//------------reliable----------------
const sportsCar = Object.create(car);

sportsCar.speed = "fast";
console.log(sportsCar);

//------------unreliable----------------
for (prop in sportsCar) {
    console.log(prop);
}

//------------reliable----------------
for (prop of Object.keys(sportsCar)) {
    console.log(prop + " : " + sportsCar[prop]);
} */
/* const top7 = ["Paris", "Tokyo", "New York", "London", "Dubai", "Singapore", "Istanbul"];

function showItinerary(...top7){
    console.log("Your top 7 cities are: ", top7);
} 

//showItinerary(top7);

const [] = top7;

const[first, second, third, ...rest] = top7;

console.log(first, second, third, rest);

export const name = "square"; */

function concatStrings(strA, strB){
    return strA + strB;
}

expect(concatStrings(2,3)).toBe(23);
