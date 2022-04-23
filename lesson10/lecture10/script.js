function Person(fName){
    this.fName = fName;
}

var person = new Person('Alex');
console.log(person);

function Worker(fName, specialization){
    Person.call(this, fName);
    this.specialization = specialization;
}

Worker.prototype.toString = function(){
    return '!!!!!! ' + this.specialization + ' !!!!!!';
}

var worker = new Worker('Max', 'teacher');
console.log(worker);


function sayName(obj){
    return 'Hello ' + obj.fName;
}

console.log(sayName(person));
console.log(sayName(worker));


function Cat(fName){
    this.fName = fName;
}

var cat = new Cat('Tomas');
console.log(sayName(cat));