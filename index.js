const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerArr=[];
const engineerArry=[];
const internArry=[];

function addMemeber() {
    inquirer
        .prompt({
            type: 'list',
            name:'title',
            message: 'Please Choose the Title of the Employee that You Want to Add:',
            choices: ['Manager', 'Engineer', 'Intern']
            }
        )
        .then((Input)=>{
            switch(Input.title){
                case 'Manager':
                    //call add manager function
                    addManager();
                    break;
                case 'Engineer':
                    //call add engineer function
                    addEngineer();
                    break;
                case 'Intern':
                    //call add Intern function
                    addIntern();
                    break;
                default:
                    break;
            }
            return (managerArr,engineerArry,internArry);
        })    
};

function addManager() {
    inquirer
        .prompt([
            {
                type:'text',
                name: 'name',
                message: "Please Enter the Manager's Name(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('Name of the Manager is required: ');
                    }
                }
            },
            {
                type:'text',
                name: 'id',
                message: "Please Enter the Manager's ID(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('ID of the Manager is required: ');
                    }
                }
            },
            {
                type:'text',
                name: 'email',
                message: "Please Enter the Manager's Email(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('Email of the Manager is required: ');
                    }
                } 
            },
            {
                type:'text',
                name: 'officeNumber',
                message: "Please Enter the Manager's Office Number(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('The Office Number of the Manager is required: ');
                    }
                } 
            },
            {
                type: 'confirm',
                name: 'addmore',
                message: 'Would You Like to Another Employee?',
                default: true
            }
        ])
        .then((Input)=>{
            managerArr.push(new Manager(Input.name, Input.id, Input.email, Input.officeNumber));
            return Input.addmore;
        })
        .then((addmore)=>{
            if (addmore) {
                new addMemeber();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type:'text',
                name: 'name',
                message: "Please Enter the Engineer's Name(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('Name of the Engineer is required: ');
                    }
                }
            },
            {
                type:'text',
                name: 'id',
                message: "Please Enter the Engineer's ID(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('ID of the Engineer is required: ');
                    }
                }
            },
            {
                type:'text',
                name: 'email',
                message: "Please Enter the Engineer's Email(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('Email of the Engineer is required: ');
                    }
                } 
            },
            {
                type:'text',
                name: 'github',
                message: "Please Enter the Engineer's GitHub Account Name(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('The GitHub Account Name of the Engineer is required: ');
                    }
                } 
            },
            {
                type: 'confirm',
                name: 'addmore',
                message: 'Would You Like to Another Employee?',
                default: true
            }
        ])
        .then((Input)=>{
            engineerArry.push(new Engineer(Input.name, Input.id, Input.email, Input.github));
            return Input.addmore;
        })
        .then((addmore)=>{
            if (addmore) {
                new addMemeber();
            }
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type:'text',
                name: 'name',
                message: "Please Enter the Intern's Name(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('Name of the Intern is required: ');
                    }
                }
            },
            {
                type:'text',
                name: 'id',
                message: "Please Enter the Intern's ID(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('ID of the Intern is required: ');
                    }
                }
            },
            {
                type:'text',
                name: 'email',
                message: "Please Enter the Intern's Email(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('Email of the Intern is required: ');
                    }
                } 
            },
            {
                type:'text',
                name: 'school',
                message: "Please Enter the Intern's School Name(required): ",
                validate: Input =>{
                    if(Input){
                        return true;
                    } else {
                        console.log('The School Name of the Intern is required: ');
                    }
                } 
            },
            {
                type: 'confirm',
                name: 'addmore',
                message: 'Would You Like to Another Employee?',
                default: true
            }
        ])
        .then((Input)=>{
            internArry.push(new Intern(Input.name, Input.id, Input.email, Input.school));
            return Input.addmore;
        })
        .then((addmore)=>{
            if (addmore) {
                new addMemeber();
            }
        })
}


new addMemeber();


function init(){
    addMemeber()
    .then((a,b,c) =>{
        return generatePage(a,b,c);
    } )
    .then(page=>{
        return writeToFile(page);
    })
    .catch(err=>{
        console.log(err);
    })
};
