const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, School){
        // calls on the parent constructor(Employee)
        super(name, id, email);

        this.School = School;
    }

    getSchool() {
        return this.School;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern