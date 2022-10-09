const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    it('should create an employee', () => {
        const e = new Employee();
        expect (typeof(e)).toBe('object');
    });

    it('should have a name', () => {
        const name = 'Bryan';
        const e = new Employee(name, 0, 'email@email.com');
        expect (typeof(e.name)).toBe('string');
    });

    it('should have an id', () => {
        const id = 0;
        const e = new Employee('Bryan', id, 'email@email.com');
        expect (typeof(e.id)).toBe('number');
    });

    it('should have an email', () => {
        const email = 'bryantborek@gmail.com';
        const e = new Employee('Bryan', 0, email);
        expect (typeof(e.email)).toBe('string');
    });
});

test('should be able to get a name', () => {
    const name = 'Bry'
    const x = new Employee(name, 1, 'fake@email.com')
    expect(x.getName()).toBe(name)
})

test("should be able to get an id number", () => {
    const id = 1
    const x = new Employee('Bry', id, 'fake@email.com')
    expect(x.getId()).toBe(id);
})

test("should be able to get an email", () => {
    const email = 'fake@email.com'
    const x = new Employee('Bry', 1, email)
    expect(x.getEmail()).toBe(email);
})