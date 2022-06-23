const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Mo','11223344','macv@gmail.com','MoiCar');

test('if values for Engineer are recieved', () => {
    expect(engineer.name).toBe('Mo');
    expect(engineer.id).toBe('11223344');
    expect(engineer.email).toBe('macv@gmail.com');
});

test("if we can get name value from getName()", () => {
    expect(engineer.getName()).toBe('Mo');
});

test("if we can get id value from getId()", () => {
    expect(engineer.getId()).toBe('11223344');
});

test("if we can get email value from getEmail()", () => {
    expect(engineer.getEmail()).toBe('macv@gmail.com');
});

test("if we can get role value from getGitHub()", () => {
    expect(engineer.getGithub()).toBe('MoiCar');
});

test("if we can get role value from getRole()", () => {
    expect(engineer.getRole()).toBe('Engineer');
});

console.log(Engineer)