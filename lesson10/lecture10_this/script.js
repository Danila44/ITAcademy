// Контекст

var dog = {
    fName: 'Bob',
    age: 10,
    bark: function(){
        return 'Woof woof!';
    },
    getInfo: function(){
        //return dog.fName;
        return this.fName;
    }
}

//console.log(dog.bark());
//console.log(dog.getInfo());

var f1 = dog.bark;
var f2 = dog.getInfo;
var f2Bind = dog.getInfo.bind(dog);

console.log(f1());
console.log(f2());

// Потеря this;

//call

console.log(f2.call(dog))

//apply

console.log(f2.apply(dog));

// bind

console.log(f2Bind());