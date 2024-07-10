class User {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}
let user1 = new User("John",25);
user1.greet(); // Hello John!
