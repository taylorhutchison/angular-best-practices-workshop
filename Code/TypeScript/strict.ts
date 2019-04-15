
// tslint:disable

// --noImplicitAny
function add(a, b) {
    var num = a + b;
    return a + b;
}

var result = add(1, 2);
var msg = add('hello', 'world');








// --strictNullChecks
function listFriends(friends) {
    friends.forEach(function(friend) {
        console.log(friend.name);
    })
}

var person = {
    name: 'Guy',
    age: 45,
    friends: null
};




// --noImplicitThis
class Counter {

    value: number;

    constructor(start: number) {
        this.value = start;
    }

    createAddFunction(increment: number){
        return function() {
            this.value += increment;
        }
    }
}

const counter = new Counter(0);
const counterIncrement = counter.createAddFunction(10);
counterIncrement();



// --noImplicitReturns
function httpCodeIsGood(code: number): boolean {
    if (code >= 200 && code < 400) {
        return true;
    }
}