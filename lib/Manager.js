// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(inputName, inputId, inputEmail, inputOffice) {
        const name = inputName;
        const id = inputId;
        const email = inputEmail;
        const officeNumber = inputOffice;

        super(name, id, email, officeNumber); //idk if officeNumber should be here
        this.inputName = inputName;
        this.inputId = inputId;
        this.inputEmail = inputEmail;
        this.inputOffice = inputOffice;
    }
    getRole() {
        // * `getRole()`&mdash;overridden to return `'Manager'`
    }
    getOffice() {

    }
}