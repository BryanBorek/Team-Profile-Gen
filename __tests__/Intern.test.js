const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    it('should create an Intern', () => {
        const e = new Intern();
        expect (typeof(e)).toBe('object');
    });

    it('should have a name', () => {
        const name = 'Bry';
        const e = new Intern(name, 0, 'fake@email.com');
        expect (typeof(e.name)).toBe('string');
    });

    it('should have an id', () => {
        const id = 0;
        const e = new Intern('Bry', id, 'fake@email.com');
        expect (typeof(e.id)).toBe('number');
    });

    it('should have an email', () => {
        const email = 'fake@email.com';
        const e = new Intern('Bry', 0, email);
        expect (typeof(e.email)).toBe('string');
    });

    it('should have a school', () => {
        const school = 'U of M';
        const e = new Intern('Bry', 0, 'fake@email.com', school);
        expect (typeof(e.school)).toBe('string');
    });
});

test('should be able to get a name', () => {
    const name = 'Bry'
    const x = new Intern(name, 1, 'fake@email.com')
    expect(x.getName()).toBe(name)
})

test("should be able to get an id number", () => {
    const id = 1
    const x = new Intern('Bry', id, 'fake@email.com')
    expect(x.getId()).toBe(id);
})

test("should be able to get an email", () => {
    const email = 'fake@email.com'
    const x = new Intern('Bry', 1, email)
    expect(x.getEmail()).toBe(email);
})

test("should be able to get a school name", () => {
    const school = 'BryanBorek'
    const x = new Intern('Bry', 1, 'fake@email.com', school)
    expect(x.getSchool()).toBe(school);
})