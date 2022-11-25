// TODO: Include packages needed for this application
const inquirer =require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of this Project?",
    name: "title"
},
{
    type: "input",
    message: "What is the Project about? Please give a detailed description of the project.",
    name: "description"
},
{
    type: "input",
    message: "What does the user need to install to run this App?",
    name: "installation"
},
{
    type: "input",
    message: "Give a detailed description of how the App is used.",
    name: "usage"
},
{
    type: "input",
    message: "What License is being used for this App?",
    name: "license"
},
{
    type: "input",
    message: "Who contributed to this App?",
    name: "contributors"
},
{
    type: "input",
    message: "What commands are needed to test this App?",
    name: "tests"
},
{
    type: "input",
    message: "Give contact information for inquiries",
    name: "contact"
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "userName"
}
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        console.log(fileName)
        console.log(data)
        if (error){
            return console.log(error)
        }else{
            console.log("Success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then (function(data){
    writeToFile(path.join(__dirname,"/dist/README.md"), generateMarkdown(data));
    console.log(data)
})
}

// Function call to initialize app
init();

