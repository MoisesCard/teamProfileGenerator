const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateSite = require('./src/generate-site');
const fs = require("fs");
const path = require('path');
const pageDir = path.resolve(__dirname,'dist')
const pagePath = path.join(pageDir,'index.html');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            // name question
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false
                };
            }
        },

        {
            // employee id question
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID? (Required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID');
                    return false
                };
            }
        },

        {
            // email question
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false
                };
            }
        },

        {
            // office number question
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeNum => {
                if(officeNum) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false
                };
            }
        }   
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

// ---ask questions for new team member or finish team---
const promptMenu = () => {
    return inquirer.prompt([
        {
           type: 'list',
           name: 'menu',
           message: 'Select which option you would like to continue with:',
           choices: ['add engineer', 'add intern', 'finish building team']
        }
    ]).then(userChoice => {
        switch(userChoice.menu) {
            // user wants to add Engineer
            case "add engineer":
                promptEngineer();
                break;
            // user wants to add Intern
            case "add intern":
                promptIntern();
                break;
            // user wants finish building team
            default:
                buildTeam();
        }
    });
}

// ---ask questions for a new Engineer---
const promptEngineer = () => {
    console.log('----Add new Engineer----');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of Engineer?(Required)',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                } else {
                    console.log('Please enter name of engineer');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of Engineer?(Required)',
            validate: employeeId=> {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of engineer. (Required)',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter email address');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of Engineer?(Required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                } else {
                    console.log('Please enter github username of engineer');
                    return false
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

// ---ask questions for a new Intern---
const promptIntern = () => {
    console.log('----Add new Intern----');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of Intern?(Required)',
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log('Please enter name of intern');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of intern?(Required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of intern? (Required)',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter email address');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school name of intern?(Required)',
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log('Please enter school name');
                    return false
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log('----Finish building my team----');

    if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir)
    }
    fs.writeFileSync(pagePath, generateSite(teamMembers), 'utf-8');
}


// runs the first prompts
promptManager();