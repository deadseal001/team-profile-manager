const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const generatePage= require('./src/generatePage');

const managerArr=[];
const engineerArry=[];
const internArry=[];

// function addMemeber() {
//     return new Promise (resolve=>{
//     inquirer
//         .prompt({
//             type: 'list',
//             name:'choose',
//             message: 'Please Choose the What You Want to Do:',
//             choices: ['Add Engineer', 'Add Intern','Finish building my team']
//             }
//         )
//         .then((Input)=>{
//             switch(Input.choose){
//                 case 'Add Engineer':
//                     //call add engineer function
//                     return (addEngineer());
//                 case 'Add Intern':
//                     //call add Intern function
//                     return (addIntern());
//                 default:
//                     return generatePage(managerArr, engineerArry,internArry);
//             }
//         })
//     })

// };

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
                type: 'list',
                name:'choose',
                message: 'Please Choose the What You Want to Do:',
                choices: ['Add Engineer', 'Add Intern','Finish building my team']
            }
        ])
        .then((Input)=>{
            managerArr.push(new Manager(Input.name, Input.id, Input.email, Input.officeNumber));  
            return Input;
        })
        .then((Input)=>{
            switch(Input.choose){
                case 'Add Engineer':
                    //call add engineer function
                    return (addEngineer());
                case 'Add Intern':
                    //call add Intern function
                    return (addIntern());
                default:
                    return generatePage(managerArr, engineerArry,internArry);
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
                type: 'list',
                name:'choose',
                message: 'Please Choose the What You Want to Do:',
                choices: ['Add Engineer', 'Add Intern','Finish building my team']
            }
        ])
        .then((Input)=>{
            engineerArry.push(new Engineer(Input.name, Input.id, Input.email, Input.github));
            return Input;
        })
        .then((Input)=>{
            switch(Input.choose){
                case 'Add Engineer':
                    //call add engineer function
                    return (addEngineer());
                case 'Add Intern':
                    //call add Intern function
                    return (addIntern());
                default:
                    return generatePage(managerArr, engineerArry,internArry);
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
                type: 'list',
                name:'choose',
                message: 'Please Choose the What You Want to Do:',
                choices: ['Add Engineer', 'Add Intern','Finish building my team']
            }
        ])
        .then((Input)=>{
            internArry.push(new Intern(Input.name, Input.id, Input.email, Input.school));
            return Input;
        })
        .then((Input)=>{
            switch(Input.choose){
                case 'Add Engineer':
                    //call add engineer function
                    return (addEngineer());
                case 'Add Intern':
                    //call add Intern function
                    return (addIntern());
                default:
                    return generatePage(managerArr, engineerArry,internArry);
            }
        })
}

function generateCards(a,b,c){
    
    return`
      ${a.map((element)=>{
        // console.log("a");
        return`
          <card class="mangerCard col-2 shadow-sm">
            <div  class="text-dark bg-secondary">
              ${element.name}<br>
              <i class="fa fa-mug-hot"> Manager</i>
            </div>  
            <div class="col-12 flex justify-content-center">
              <div class="col-10 my-4 text-dark">
                <div>
                ${element.getID()}
                </div>
                <div>
                <a href="mailto:${element.email}">${element.getEmail()}</a>
                </div>
                <div>
                ${element.getOfficeNumber()}
                </div>
              </div>
            </div>
          </card>
        `
      })
      .join('')
      }
      ${b.map((element)=>{
        return` 
          <card class="mangerCard col-2 text-dark bg-success">
            <div class="text-dark bg-success">
              ${element.name}<br>
              <i class="fa fa-glasses"> Engineer</i>
            </div>
            <div class="col-12 flex justify-content-center">
              <div class="col-10 my-4 text-dark">
                <div>
                ${element.getID()}
                </div>
                <div>
                <a href="mailto:${element.email}">${element.getEmail()}</a>
                </div>
                <div>
                <a href="https://github.com/${element.github}" target="_blank">${element.getGithub()}</a>
                </div>
              </div>
            </div>
          </card>
        `
      })
      .join('')
      } 
      ${c.map((element)=>{
        return`
          <card class="mangerCard col-2 text-dark bg-warning">
            <div class="text-dark bg-warning">
              ${element.name}<br>
              <i class="fa fa-graduation-cap"> Intern</i>
            </div>
            <div class="col-12 flex justify-content-center">
              <div class="col-10 my-4 text-dark">
                <div>
                ${element.getID()}
                </div>
                <div>
                <a href="mailto:${element.email}">${element.getEmail()}</a>
                </div>
                <div>
                ${element.getSchool()}
                </div>
              </div>
            </div>
          </card>
        `
      })
      .join('')
      } 
    `
}
  
function generatePage(a,b,c) {
//console.log(a,b,c);
    let page= `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Manager</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css">
</head>

<body>
    <header>
    <div class="container bg-red flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-center text-dark bg-gradient bg-primary py-2 px-3">My Team</h1>
    </header>
    <main class="container flex my-5">
    ${generateCards(a,b,c)}
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
    
    `
    writeToFile(page);
}

function writeToFile(data){
    console.log("writefile")
    return new Promise((resolve,regject)=>{
        fs.writeFile('./dist/index.html',data, err=>{
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

function init(){
    addManager()
    // .then(page=>{
    //     console.log(page);
    //     return writeToFile(page);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
};


init();
// addMemeber();