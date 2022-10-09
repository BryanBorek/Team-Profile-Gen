const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    it('should create an Manager', () => {
        const e = new Manager();
        expect (typeof(e)).toBe('object');
    });

    it('should have a name', () => {
        const name = 'Bry';
        const e = new Manager(name, 0, 'fake@email.com');
        expect (typeof(e.name)).toBe('string');
    });

    it('should have an id', () => {
        const id = 0;
        const e = new Manager('Bry', id, 'fake@email.com');
        expect (typeof(e.id)).toBe('number');
    });

    it('should have an email', () => {
        const email = 'fake@email.com';
        const e = new Manager('Bry', 0, email);
        expect (typeof(e.email)).toBe('string');
    });

    it('should have an office', () => {
        const office = 17;
        const e = new Manager('Bry', 0, 'fake@email.com', office);
        expect (typeof(e.office)).toBe('number');
    });
});

test('should be able to get a name', () => {
    const name = 'Bry'
    const x = new Manager(name, 1, 'fake@email.com')
    expect(x.getName()).toBe(name)
})

test("should be able to get an id number", () => {
    const id = 1
    const x = new Manager('Bry', id, 'fake@email.com')
    expect(x.getId()).toBe(id);
})

test("should be able to get an email", () => {
    const email = 'fake@email.com'
    const x = new Manager('Bry', 1, email)
    expect(x.getEmail()).toBe(email);
})

test("should be able to get an office number", () => {
    const office = 17
    const x = new Manager('Bry', 1, 'fake@email.com', office)
    expect(x.getOffice()).toBe(office);
})