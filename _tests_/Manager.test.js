const Manager = require('../lib/Manager');



test("Will constructor properly set", () => {
    const manager = new Manager('Name', 10, 'testing@email.com', 60);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Should get office number", () => {
    const manager = new Manager('Name', 10, 'testing@email.com', 151);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Should get employee role", () => {
    const manager = new Manager('Name', 10, 'testing@email.com');
    expect(manager.getRole()).toEqual("Manager");
}); 