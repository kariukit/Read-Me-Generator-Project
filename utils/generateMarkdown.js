// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.length == 0){
      return " ";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license.length == 0){
      return " ";
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license.length == 0){
      return " ";
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
https://github.com/${data.userName}/${data.title}

# Description
${data.description}

# Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Contact](#Contact)
  
  # Installation
  The following dependencies must be installed in order to run this App.
  # Usage
  In order to use this app, ${data.usage}
  # License
  This App is licensed under the ${data.license} license. 
  ![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  # Tests
  The following is needed to run the tests: ${data.tests}
  # Questions
  If you have any questions about the app you can contact ${data.contact}
  `;
  }
  
  module.exports = generateMarkdown;
  