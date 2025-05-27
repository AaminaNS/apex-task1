// function showQuote() {
//   const quotes = [
//     "You are capable of amazing things!",
//     "Believe in yourself and all that you are.",
//     "The future depends on what you do today.",
//     "Keep pushing forward, no matter what!"
//   ];
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   alert(quotes[randomIndex]);
// }

// function toggleTheme() {
//   document.body.classList.toggle("light-theme");
// }

// function validateForm() {
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();

//   if (name === "" || email === "") {
//     alert("Please fill in all fields before submitting.");
//     return false;
//   }
//   alert("Form submitted successfully!");
//   return true;
// }

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log("Hello, my name is" , this.name);
  }
}

class Student extends Person{
  constructor(name,age,grade){
    super(name,age);
    this.grade = grade;
  }
  greet(){
    super.greet();
    console.log("I am in grade ",this.grade);
  }
}

const p = new Person("bindhu",16);
p.greet();

const s = new Student("venisha",21,12);
s.greet();




class Animal{
  makeSound(){
    console.log("some generic sound");
  }
}

class Dog extends Animal{
    makeSound(){
      super.makeSound();
      console.log("Wooof!");
    }
}

class Cat extends Animal{
  makeSound(){
    console.log("meow");
  }
}


const dog = new Dog();
dog.makeSound();

const cat = new Cat();
cat.makeSound();


class Vehicle{
  start(){
    console.log("this is a start method");
  }
}

class Car extends Vehicle{

    drive(){
      console.log("this is a drive method in car class");
    }
}

class ElectricCar extends Car{

  charge(){
    console.log("this is a charging");
  }
}


const e = new ElectricCar();
e.start();
e.drive();
e.charge();

class Parent {
  constructor() {
    this.name = "Parent";
  }
  sayHello() {
    console.log("Hello from", this.name);
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "Child";
  }
}

const obj = new Child();
obj.sayHello();
