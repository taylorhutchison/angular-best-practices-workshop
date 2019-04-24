interface IFish {
    move(x: number, y: number);
    eat();
    swim();
}

function moveAnimalAndEat(animal: IFish, x: number, y: number) {
    animal.move(x, y);
    animal.eat();
}
