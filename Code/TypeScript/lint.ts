var x = 'This is a very long string that takes up too many columns and that makes it sometimes hard to read. Please consider shorter strings.';
var names = ['Alex', 'Bob', 'Chloe'];
var num = 5;

function moreThanTwo(list: string[] | string) {
    return list.length > 2;
}

console.log(moreThanTwo(x));
console.log(moreThanTwo(names));
console.log(moreThanTwo(num));
