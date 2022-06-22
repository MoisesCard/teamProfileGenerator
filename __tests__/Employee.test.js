const Employee = require('../lib/Employee');
const employee = new Employee('Mo','123456','macv123321@gmail.com');

test('if values for Employee are recieved', () => {
    expect(employee.name).toBe('Mo');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('macv123321@gmail.com');
});

test("if we can get name value from getName()", () => {
    expect(employee.getName()).toBe('Mo');
});

test("if we can get id value from getId()", () => {
    expect(employee.getId()).toBe('123456');
});

test("if we can get email value from getEmail()", () => {
    expect(employee.getEmail()).toBe('macv123321@gmail.com');
});

test("if we can get role value from getRole()", () => {
    expect(employee.getRole()).toBe('Employee');
});

console.log(employee)