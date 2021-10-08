// const rabbit = {
//     color: 'grey',
//     jump: function(){
//         return 'I\'m jumpimg';
//     }
// };

// const rabbitDom = {
//     name: 'Georgiy',
//     pet: function(){
//         return `${this.name} says: pet me`;
//     }
// };

// const rabbitMag = {
//     talk: function(talking){
//         return `${this.name} says: ${talking}`;
//     }
// };

// rabbitDom.__proto__ = rabbit;
// rabbitMag.__proto__ = rabbitDom;

// console.log(rabbitMag.jump());
// console.log(rabbitMag.talk('Hi there'));
// console.log(rabbitMag.pet());


    // function toString(){
    //     return`${this.firstName} ${this.lastName}`;
    // }

    // const animal = {
    //     go: function(){
    //         return `${this.firstName} going`;
    //     }
    // }

    // const man = {
    //     eat: function(){
    //         return `${this.firstName} eating`;
    //     }
    // }
    // man.__proto__ = animal;


    // function StudentPrototype(){
    //     this.toString = function(){
    //         return `${this.firstName} ${this.lastName}`
    //     }
    //     this.eat = function(){
    //         return `${this.firstName} eating`;
    //     }
    //     this.go = function(){
    //         return `${this.firstName} going`;
    //     }
    // }
    // /**
    //  * 
    //  * @param {string} firstName 
    //  * @param {string} lastName 
    //  * @param {number} age 
    //  * @param {boolean} isMale 
    //  * @returns instance Student
    //  */
    // function Student(firstName, lastName, age, isMale){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.isMale = isMale; 
    //     if(!new.target){
    //         return new Student(firstName, lastName, age, isMale);
    //     }
    // }

    // Student.prototype = new StudentPrototype(); 

    // const student = Student('Ivan', 'Yaremko', 22, true);
    // console.log(student.toString());

    // const student2 = {
    //     id: 2,
    //     firstName: 'Ann',
    //     lastName: 'Lezedova',
    //     age: 20,
    //     isMale: false,
    //     toString, //same with 10 string
    // };
    // console.log(student2.toString());
    // student2.__proto__ = man;
    // console.log(student2.eat());


// function LadderPrototype(){
//     this.up = function(){
//         this.value++;
//         return this;
//     }
//     this.down = function(){
//         this.value--;
//         return this;
//     }
//     this.showStep = function(){
//         return this.value;
//     }
// }

// function Ladder(){
//     this.value = 0;
// }

// Ladder.prototype = new LadderPrototype(); 

// const ladder1 = new Ladder();


// const step = ladder1.up().up().down().up().up().up().up().down().showStep();

// console.log(step);


    // function saySomething(howSay, whatSay){
    //     howSay(whatSay);
    // }

    // saySomething(console.log, 'qwerty');

    // saySomething(alert, 'alert');
    // saySomething(prompt, 'prompt');
    // saySomething(confirm, 'confirm');


        // const num = [1, 2, 3, 4, 5];

        // function square(n){
        //     console.log(n*n);
        //     return n*n;
        // }

        // for(let i=0;i<num.length;i++){
        //     square(num[i]);
        // }

        // num.forEach(square);


        // const users = [{id:1,},{id:2,},{id:3,}];

        // function addSubscribe(user){
        //     user.isSubscribed = true;
        // }

        // users.forEach(addSubscribe);


        // function isEven(n){
        //     return n%2===0;
        // }

        // console.log(myArray.some(isEven));


    // function User(firstName, lastName, age, isMale, email, isSubscribed = false){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.isMale = isMale;
    //     this.email = email;
    //     this.isSubscribed = isSubscribed;
    // }

    // function UserPrototype(){
    //     this.fullName = function(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // User.protorype = new UserPrototype();

    // function createRandomUser(amount = 1){
    //     const db = [];
    //     for(let i=0; i<amount; i++){
    //         const user = new User(
    //             `Name${i}`,
    //             `Lname${i}`,
    //             Math.ceil(Math.random()*60+20),
    //             Math.random()>0.5,
    //             `email${i}@gmail.com`
    //         );
    //         db.push(user);
    //     }
    //     return db;
    // }

    // const user = createRandomUser(50);
    // console.table(user);