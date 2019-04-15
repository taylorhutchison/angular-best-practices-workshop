const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numberList.map( function(item) {
    return item * item;
});

numberList.map( function(item, index) {
    return item * index;
});