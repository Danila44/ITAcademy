// sum from 1 to ... 10

var sum = 0;
for(var i = 0; i <= 10; i++){
    sum += i;
}

// console.log(sum);

// 1 + 2 + 3+ 4+ 5 .. 10



// Рекурсия 

var sum1 = 0;

function sumFunc(currentValue){
    sum1 += currentValue;
    if(currentValue < 10){
        return sumFunc(++currentValue);
    }

    console.log(sum1, currentValue);
    
}
//sumFunc(0);







var fName = 'Alex';

function getInfo(){
    var lName = 'Ivanov';
    // console.log(lName);
    console.log(fName);
}



// Замыкание




//getInfo();
var ref = null;

function counter(){
    var itemCount = 10;

    function sumF(){
        console.log(++itemCount);
    }
    ref = sumF;
    //sumF();
}

counter();
ref();
ref();
ref();

/* var c2 = counter;
c2(); 
ref();
ref();
ref(); */


/* var c1 = counter;
c1();
c1();
c1(); */

//console.log(counter)

