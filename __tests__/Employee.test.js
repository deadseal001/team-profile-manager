const Employee = require ('../lib/Employee');

test('creates an Employee object', ()=>{
    const employee = new Employee('John Smith','199665','liwenbo4936@gmail.com');

    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe('199665');
    expect(employee.email).toBe('liwenbo4936@gmail.com');
});

test("gets employee's Name, ID and Email", ()=>{
    const employee = new Employee('John Smith','199665','liwenbo4936@gmail.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.getID()).toEqual(expect.stringContaining(employee.id.toString()));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});

