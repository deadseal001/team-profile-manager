const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return `Role: Manager`;
    }

    getOfficeNumber(){
        return `Office Number: ${this.officeNumber}`;
    }

}

module.exports= Manager;