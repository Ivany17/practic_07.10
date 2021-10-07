function toString(){
    return`${this.firstName} ${this.lastName}`;
}
const man = {
    eat: function(){
        return 'I\'m eating';
    }
}
const student1 = {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Yaremko',
    age: 22,
    isMale: true,
    toString: toString, //same with 20 string
};
console.log(student1.toString());

const student2 = {
    id: 2,
    firstName: 'Andrey',
    lastName: 'Rudnitskiy',
    age: 25,
    isMale: true,
    toString, //same with 10 string
};
console.log(student2.toString());

const student3 = {
    id: 3,
    firstName: 'Ann',
    lastName: 'Lezedova',
    age: 20,
    isMale: false,
};