// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// The other three classes will extend `Employee`.

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    // * `getRole()`&mdash;returns `'Employee'`
    getRole() {

    }
}

module.exports = Employee;
