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
// const student1 = {
//     id: 1,
//     firstName: 'Ivan',
//     lastName: 'Yaremko',
//     age: 22,
//     isMale: true,
//     toString: toString, //same with 20 string
// };
// console.log(student1.toString());
// student1.__proto__ = man;
// console.log(student1.eat());

// const student2 = {
//     id: 2,
//     firstName: 'Andrey',
//     lastName: 'Rudnitskiy',
//     age: 25,
//     isMale: true,
//     toString, //same with 10 string
// };
// console.log(student2.toString());
// student2.__proto__ = man;
// console.log(student2.eat());

// const student3 = {
//     id: 3,
//     firstName: 'Ann',
//     lastName: 'Lezedova',
//     age: 20,
//     isMale: false,
// };

const rabbit = {
    color: 'grey',
    jump: function(){
        return 'I\'m jumpimg';
    }
};

const rabbitDom = {
    name: 'Georgiy',
    pet: function(){
        return `${this.name} says: pet me`;
    }
};

const rabbitMag = {
    talk: function(talking){
        return `${this.name} says: ${talking}`;
    }
};

rabbitDom.__proto__ = rabbit;
rabbitMag.__proto__ = rabbitDom;

console.log(rabbitMag.jump());
console.log(rabbitMag.talk('Hi there'));
console.log(rabbitMag.pet());
