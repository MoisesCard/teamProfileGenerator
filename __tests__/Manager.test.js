const Manager = require('../lib/Manager');
const manager = new Manager('Moy','654321','macv123@gmail.com','561')

test('if we get values for Manager', () => {
    expect(manager.name).toBe('Moy');
    expect(manager.id).toBe('654321');
    expect(manager.email).toBe('macv123@gmail.com');
    expect(manager.officeNumber).toBe('561')
});

test('if we get name value from getName()', () => {
    expect(manager.getName()).toBe('Moy');
});

test('if we get id value from getID()', () => {
    expect(manager.getId()).toBe('654321');
});

test('if we get email value from getEmail()', () => {
    expect(manager.getEmail()).toBe('macv123@gmail.com');
});

test('if we get officeNumber value from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('561');
})

console.log(manager)