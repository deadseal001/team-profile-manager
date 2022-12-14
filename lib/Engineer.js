const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub(){
        return `GitHub: ${this.github}`;
    }

    getRole() {
        return `Role: Engineer`;
    }
}

module.exports= Engineer;