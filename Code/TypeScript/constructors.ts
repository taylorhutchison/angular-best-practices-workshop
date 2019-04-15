class Person {
    public name: string;
    public age: number;

    private greeter: (n: string) => string;

    constructor(name: string, age: number, greeter: (n: string) => string) {
        this.name = name;
        this.age = age;
        this.greeter = greeter;
    }

    public greet() {
        // tslint:disable:no-console
        console.log(this.greeter(this.name));
    }

}

const bjarne = new Person("Bjarne", 68, (n) => `Hej, ${n}`);

bjarne.greet();
