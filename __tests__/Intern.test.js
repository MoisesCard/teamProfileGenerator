const Intern = require('../lib/Intern');
const intern = new Intern('Mo','123654','123@gmail.com','UCF');

test('if values for Intern are recieved', () => {
    expect(intern.name).toBe('Mo');
    expect(intern.id).toBe('123654');
    expect(intern.email).toBe('123@gmail.com');
});

test("if we can get name value from getName()", () => {
    expect(intern.getName()).toBe('Mo');
});

test("if we can get id value from getId()", () => {
    expect(intern.getId()).toBe('123654');
});

test("if we can get email value from getEmail()", () => {
    expect(intern.getEmail()).toBe('123@gmail.com');
});

test("if we can get school value from getSchool()", () => {
    expect(intern.getSchool()).toBe('UCF');
});

test("if we can get role value from getRole()", () => {
    expect(intern.getRole()).toBe('Intern');
});

console.log(Intern)