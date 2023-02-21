const Employee = require("../lib/Employee");

test("Will constructor properly set", () => {
    const employee = new Employee('Name', 10, 'testing@email.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});