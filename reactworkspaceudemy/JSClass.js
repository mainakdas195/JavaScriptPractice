class Human {
    constructor() {
        this.gender = 'male';
    }

    printGenger() {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = 'female'; //Property is overridden
    }

    printMyname() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname();
person.printGenger();