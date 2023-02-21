const Engineer = require("../lib/engineer");



test("Will constructor properly set", () => {
    const engineer = new Engineer('Name', 10, 'testing@email.com', 'testingGitHub');
    expect(engineer.github) .toEqual(expect.any(String));
});


test("Should get github username", () => {
    const engineer = new Engineer('Name', 10, 'testing@email.com', 'testingGitHub');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test("Should get the employee role", () => {
    const engineer = new Engineer('Name', 10, 'testing@email.com', 'testingGitHub');
    expect(engineer.getRole()).toEqual("Engineer");
});