class Human {
    gender = 'male';

    printGenger = () => {
        console.log(this.gender);
    }
}
class Person extends Human {
        name = 'Max';
        gender = 'female'; //Property is overridden
    

    printMyname = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname();
person.printGenger();