const Employee = require("../lib/Employee");

/* this unit test will deciper the constructor prot */

test("Will constructor properly set", () => {
    const employee = new Employee('Name', 10, 'testing@email.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Should get the employee name", () => {
    const employee = new Employee('Name', 10, 'testing@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
});


test("Should get the employee ID", () => {
    const employee = new Employee('Name', 10, 'testing@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});


test("Should get the employee email", () => {
    const employee = new Employee('Name', 10, 'testing@email.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test("Should get the employee role", () => {
    const employee = new Employee('Name', 10, 'testing@email.com');
    expect(employee.getRole()).toEqual("Employee");
});
