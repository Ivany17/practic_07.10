// const cat = {
//     name: 'Mukha',
//     isMale: false,
//     color: 'black and white',
//     breed: 'yard',
//     age: 2,
//     isSlipping: true,
//     talk:function(){
//         return 'meow';
//     },
// };

// cat.age++;
// console.log(cat.talk());
// cat.countPaws = 4;
// console.log(cat);
// console.log(cat.name);
// console.log(cat.isMale);
// console.log(cat.age);

// delete cat.isSlipping;
// console.log(cat);


// const building = {
//     name: 'House',
//     isBrick: true,
//     color: 'orange and green',
//     district: 'Alexandrovskiy',
//     flours: 12,
//     elevator:function(){
//         return 'up';
//     },
// };

// console.log(building.elevator());
// console.log(building);
// console.log(building.name);
// console.log(building.isBrick);
// console.log(building.flours);


// function Cat(name, isMale, color, breed, age){
//     this.name = name;
//     this.isMale = isMale;
//     this.color = color;
//     this.breed = breed;
//     this.age = age;
//     this.talk = function(){
//         return 'meow';
//     }
// };

// const newCat = new Cat('Mukha', false, 'black and white', 'yard', 2);
// console.log(newCat.name+' tells '+ newCat.talk());


// function User(name, sname,age){
//     this.name = name;
//     this.sname = sname;
//     this.age = age;
//     this.fullName = function(){
//         return this.name+' '+this.sname;
//     }
// };

// const oneUser = new User('Olha', 'Ivanova', 23);

// const twoUser = new User('Olexandr', 'Martynov', 25);

// const threeUser = new User('Anastasia', 'Veselova', 22);

// console.log(oneUser.fullName());


// function Country(name, population, area){
//     this.name = name;
//     this.population = population;
//     this.area = area;
//     this.getDensity = function(){
//         return this.population/this.area;
//     }
// };

// const italyCountry = new Country('Italy', 60317000

// , 302);
// const greeceCountry = new Country('Greece', 10718000, 132);
// const franceCountry = new Country(('France', 67413000, 641));

// console.log(italyCountry.getDensity());


// function Auto(name, maxSpeed){
//     this.name = name;
//     this.maxSpeed = maxSpeed;
//     this.speed = 0;
//     this.accelerate = function(value){
//         if(value<0){
//             return false;
//         }
//         this.speed += value;
//         if(this.speed>=this.maxSpeed){
//             return (this.speed = maxSpeed);
//         } 
//         return this.speed;
//     };
//     this.deaccelerate = function(value){
//         if(value<0){
//             return false;
//         }
//         this.speed -= value;
//         if(this.speed<0){
//             return (this.speed = 0);
//         } 
//         return this.speed;
//     };
//     this.stop = function(){
//         return (this.speed = 0);
//     };
// };

// const car = new Auto('BMW', 250);


// function CoffeMachine(brand, maxVolume){
//     this.brand = brand;
//     this.maxVolume = maxVolume;
//     this.volume = 0;
//     this.addWater = function(value){
//         if(value<0){
//             return false;
//         }
//         this.volume += value;
//         if(this.volume>=this.maxVolume){
//             return (this.volume = maxVolume);
//         } 
//         return this.volume;
//     };
//     this.makeCoffee = function(value){
//         if(value<0 || this.volume<value){
//             return false;
//         }
//         this.volume -= value;
//         if(this.volume<0){
//             return (this.volume = 0);
//         } 
//         return this.volume;
//     };
// };

// const machine = new CoffeMachine('Intezit', 300);


// const user = {
//     firstName: 'Elon',
//     lastName: 'Musk',
//     age: 50,
//     isMale: true,
// }

// const sayHello = function(obj){
//     return `Hello, ${obj.firstName} ${obj.lastName}!`;
// }

// console.log(sayHello(user));


// const obj = {
//     name: 'pen',
//     'is written': true,
//     11: 78,
// }

// console.log(obj[11]);
// console.log(obj['11']);
// console.log(obj['is written']);
// console.log(obj['name']);


        // const createMultiplicationTable = function(min=1, max=10){
        //     const table = {};
        //     for(let i=min; i<=max; i++){
        //         for(let j=1; j<=max; j++){
        //             //Доступ к свойству с возможностью вычисления
        //             table[`${i} * ${j} = `] =  i*j;
        //         }
        //     }
        //     return table;
        // }

        // console.log(createMultiplicationTable())


            // const f = function(str, obj){
            //     return obj[str];
            // }

            // const str = '2 * 3 = ';
            // const table = createMultiplicationTable();
            // console.log(f(str, table));
