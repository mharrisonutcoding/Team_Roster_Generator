const Intern = require("../lib/Intern");
  
testing("Will constructor properly set", () => {
    const intern = new Intern('Name', 10, 'testing@email.com', 'school');
    expect(intern.school) .toEqual(expect.any(String));
});

testing("Should get interns school", () => {
    const intern = new Intern('Name', 10, 'testing@email.com', 'school');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

testing("Should get role", () => {
    const intern = new Intern('Name', 10, 'testing@email.com', 'school');
    expect(intern.getRole()).toEqual("Intern");
}); 