const Engineer = require ('../lib/Engineer');

test('creates an engineer object', ()=>{
    const engineer = new Engineer('John Smith','199665','liwenbo4936@gmail.com','deadseal001');

    expect(engineer.name).toBe('John Smith');
    expect(engineer.id).toBe('199665');
    expect(engineer.email).toBe('liwenbo4936@gmail.com');
});

test("gets engineer's Name, ID and Email", ()=>{
    const engineer = new Engineer('John Smith','199665','liwenbo4936@gmail.com','deadseal001');
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
    expect(engineer.getID()).toEqual(expect.stringContaining(engineer.id.toString()));
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});