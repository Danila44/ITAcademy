function User(fName, age, userEmail){
    this.fName = fName;
    this.age = age;
    var email = userEmail;
    var self = this;

    this.getInfo = function(){
        return 'User is: ' + this.fName + ' ' + this.age;
    }
    this.getPublicEmail = function(){
        return email;
    }
    var getPrivateAge = function(){
        //return this.age;
        return self.age;
    }
    this.getPublicAge = function(){
        return getPrivateAge();
    }
};

var user = new User('Max', 20, 'test1@rmail.com');
var user1 = new User('Peter', 29, 'test2@email.com');
// console.log(user);
// console.log(user1);
// console.log(user.getPublicAge());
//console.log(user.getPrivateAge());
//console.log(user.getPublicEmail())
//console.log(user.email);
// console.log(user.fName);
// console.log(user.getInfo());




function Person(fullName, height, weight){
    this.fullName = fullName;
    this.height = height;
    this.weight = weight;

    this.getInfo = function(){
        return this.fullName + ' ' + this.height + ' ' + this.weight;
    }
}

var person = new Person('Max Maxov', 177, 77);
//console.log(person);


function Worker(fullName, height, weight, spec, expirence){
    Person.call(this, fullName, height, weight)
    // this.fullName = fullName;
    // this.height = height;
    // this.weight = weight;
    this.spec = spec;
    this.expirence = expirence;

    this.getExperinceMonth = function(){
        return this.expirence / 12;
    }
}

var worker = new Worker('Peter Peterson', 176, 76, 'programmer', 5);
console.log(worker)
console.log(worker.getInfo());