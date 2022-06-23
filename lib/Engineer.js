const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        // calls on the parent constructor(Employee)
        super(name, id, email);

        this.GitHub = GitHub;
    }

    getGithub() {
        return this.GitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer