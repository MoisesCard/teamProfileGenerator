const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        // calls on the parent constructor(Employee)
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer