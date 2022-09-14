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
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    // * `getRole()`&mdash;returns `'Employee'`
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;
