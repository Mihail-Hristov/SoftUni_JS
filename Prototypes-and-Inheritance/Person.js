class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }



    set fullName(value) {
        let tokens = value.split(' ');
        if (tokens.length == 2) {
            this.firstName = tokens[0];
            this.lastName = tokens[1];
        }
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName);