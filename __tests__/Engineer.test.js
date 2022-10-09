const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    it('should create an engineer', () => {
        const e = new Engineer();
        expect (typeof(e)).toBe('object');
    });

    it('should have a name', () => {
        const name = 'Bry';
        const e = new Engineer(name, 0, 'fake@email.com');
        expect (typeof(e.name)).toBe('string');
    });

    it('should have an id', () => {
        const id = 0;
        const e = new Engineer('Bry', id, 'fake@email.com');
        expect (typeof(e.id)).toBe('number');
    });

    it('should have an email', () => {
        const email = 'fake@email.com';
        const e = new Engineer('Bry', 0, email);
        expect (typeof(e.email)).toBe('string');
    });

    it('should have a github', () => {
        const github = 'BryanBorek';
        const e = new Engineer('Bry', 0, 'fake@email.com', github);
        expect (typeof(e.github)).toBe('string');
    });
});

test('should be able to get a name', () => {
    const name = 'Bry'
    const x = new Engineer(name, 1, 'fake@email.com')
    expect(x.getName()).toBe(name)
})

test("should be able to get an id number", () => {
    const id = 1
    const x = new Engineer('Bry', id, 'fake@email.com')
    expect(x.getId()).toBe(id);
})

test("should be able to get an email", () => {
    const email = 'fake@email.com'
    const x = new Engineer('Bry', 1, email)
    expect(x.getEmail()).toBe(email);
})

test("should be able to get a github username", () => {
    const github = 'BryanBorek'
    const x = new Engineer('Bry', 1, 'fake@email.com', github)
    expect(x.getGithub()).toBe(github);
})