

let myName = 'Micah'
const numberOfStates = 50;
let quickMaths = 5 + 4;

console.log(myName);
console.log(numberOfStates);
console.log(quickMaths);


let sayHello = 'Hello World!';
console.log(sayHello)




function checkAge (yourName, yourAge) {
    if (yourAge < 21) {
        console.log("Sorry " + yourName + ", you aren't old enough to view this page!");
    } else if (yourAge >= 21) {
        console.log('Welcome ' + yourName + ', you may proceed!');
        };
    }


checkAge('Charles', 20);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

checkAge();

let freshVeggies = ['broccoli', 'squash', 'spinach', 'zuccini', 'potatoes'];
console.log(freshVeggies);

let randoNames = {
    John: {
        yourName: 'John',
        yourAge: 21
    },
    Dave: {
        yourName: 'Dave',
        yourAge: 13
    },
    Mike: {
        yourName:'Mike',
        yourAge: 22
    },
    Bill: {
        yourName: 'Bill',
        yourAge: 20
    },
    Jimmy: {
        yourName: 'Jimmy',
        yourAge: 19
    },
    
};

function checkAge (yourName, yourAge) {
    if (yourAge < 21) {
        console.log("Sorry " + yourName + ", you aren't old enough to view this page!");
    } else if (yourAge >= 21) {
        console.log('Welcome ' + yourName + ', you may proceed!');
        };
    }
checkAge(randoNames.Bill.yourName, randoNames.Bill.yourAge);
checkAge(randoNames.John.yourName, randoNames.John.yourAge);
checkAge(randoNames.Dave.yourName, randoNames.Dave.yourAge);
checkAge(randoNames.Jimmy.yourName, randoNames.Jimmy.yourAge);
checkAge(randoNames.Mike.yourName, randoNames.Mike.yourAge);

checkAge();

checknum = (sayHello.length) % 2;

function getLength (){
    if(checknum == 0){
        console.log('The world is nice and even!');
    } else if (checknum == 1) {
        console.log('The world is an odd place.');
    } else {
        console.log('something went wrong');
    }
   
}

getLength();

console.log(sayHello.length);
