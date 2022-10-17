const Manager = require ('../lib/Manager');

test('creates an Manager object', ()=>{
    const manager = new Manager('John Smith','199665','liwenbo4936@gmail.com','608');

    expect(manager.name).toBe('John Smith');
    expect(manager.id).toBe('199665');
    expect(manager.email).toBe('liwenbo4936@gmail.com');
});

test("gets Manager's Name, ID and Email", ()=>{
    const manager = new Manager('John Smith','199665','liwenbo4936@gmail.com','608');
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
    expect(manager.getID()).toEqual(expect.stringContaining(manager.id.toString()));
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});