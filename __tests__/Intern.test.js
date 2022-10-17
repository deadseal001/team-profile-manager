const Intern = require ('../lib/Intern');

test('creates an intern object', ()=>{
    const intern = new Intern('John Smith','199665','liwenbo4936@gmail.com','deadseal001');

    expect(intern.name).toBe('John Smith');
    expect(intern.id).toBe('199665');
    expect(intern.email).toBe('liwenbo4936@gmail.com');
});

test("gets intern's Name, ID, email, role and school", ()=>{
    const intern = new Intern('John Smith','199665','liwenbo4936@gmail.com','deadseal001');
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
    expect(intern.getID()).toEqual(expect.stringContaining(intern.id.toString()));
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});