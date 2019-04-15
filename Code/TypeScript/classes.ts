class Square {
    public width: number = 0;
    public height: number = 0;
    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }
}

function squareSorter(a: Square, b: Square) {
    const aSize = a.width * a.height;
    const bSize = b.width * b.height;
    return aSize < bSize ? -1 : 1;
}

const squares = [
    new Square(2, 3),
    new Square(8, 5),
    new Square(3, 4),
    new Square(1, 1),
];

squares.sort(squareSorter);

squares.forEach(s => {
    // tslint:disable:no-console
    console.log(`Width: ${s.width}, Height: ${s.height}`);
});
