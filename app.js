const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(userName, github);


// fs.writeFile("index.html", pageHTML, err => {
//     if(err) throw err;
//     console.log("Portfolio complete! Checkout index.html to see the output!");
// });

inquirer
    .prompt([
        {
            type: "input",
            name: "userName",
            message: "What is your name?"
        }
    ])
    .then(answers => console.log(answers));
