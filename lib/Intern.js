const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        // calls on the parent constructor(Employee)
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern