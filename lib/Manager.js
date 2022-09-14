// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
const { off } = require('process');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.office = this.office
    }
}

module.exports = Manager;
