class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id= id;
        this.email=email;
    }

    getName () {
        return `Name: ${this.name}`;
    }

    getID() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: ${this.email}`;
    }

    getRole() {
        return "Role: Employee";
    }
}

module.exports = Employee;