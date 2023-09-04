# Object-Relational Mapping (ORM): E-commerce Back End
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Description

This project aims to build the back end for an e-commerce site by modifying the provided starter code. It needs to configure a working Express.js API to use Sequelize to interact with a MySQL database.


## Technologies

- JavaScript &nbsp; &nbsp; &nbsp; (Client-side web development)
- Node.js &nbsp; &nbsp; &nbsp; (A runtime environment and server-side web development platform for JavaScript)
- NPM &nbsp; &nbsp; &nbsp; (Node Package Manager for Node.js)
- JSON &nbsp; &nbsp; &nbsp; (JavaScript Object Notation is a standard text-based format for representing structured data based on JavaScript object syntax)
- Inquirer &nbsp; &nbsp; &nbsp; (Inquirer is a Node.js library that simplifies creating interactive command-line interfaces by providing prompts for user input and choices.)
- MYSQL2 &nbsp; &nbsp; &nbsp; (High-performance MySQL driver for Node.js applications.)
- Dotenv &nbsp; &nbsp; &nbsp; (Load environment variables from a .env file into Node.js application.)
- Sequelize &nbsp; &nbsp; &nbsp; (Node.js ORM for simplified database management using JavaScript.)


## Installation

In order to be able to run the applicaton, you are required to do the following:

- Install Node.js on your computer by downloading it from their website here, https://nodejs.org/en.
- If you are not sure how to install it. Click here for the instruction, https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs.
- Download the zip file/ clone the GitHub repo 
- Install npm (Node Package Manager) inside the repo by typing the following code in the Command Line:

```
    npm install mysql2         Press Enter
```
```
    npm install sequelize      Press Enter
```
```
    npm install dotenv         Press Enter
```


## Usage

To use the application,
- You need to do, "npm install" if you haven't done in the Installation section above.
- Open the folder in VSCode
- Click the "Toggle Panel" on the right-side or "Ctrl+J" to see the Terminal or Command Line Interface(CLI)
- Then, type the following commands in the Command Line:

```
    mysql -u root -p        Press Enter
```
- Then, enter the password.

- Then, type:

```
    source db/schema.sql    Press Enter
```

- Then, type:

```
    exit                    Press Enter
```

- Then, type:

```
    npm run seed            Press Enter
```
- Then, type:

```
    npm start               Press Enter
```

- Then, test all the different api routes.
- Watch the walkthrough video. [Click here](https://drive.google.com/file/d/1ZC9RToX-dUfTEyTq9dFKVJGEk1nl478u/view)


## License

This project is under the MIT License. [Click here for more information](https://opensource.org/licenses/MIT).
