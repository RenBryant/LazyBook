# LazyBook


## Table of Contents

  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Links](#links)  
  * [Usage](#usage)
  * [Technologies](#technologies)
  * [Repo Data](#repo)

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database


## Installation
To install the necessary dependencies, run the following command:

```
npm i
```

in the package.json file which is located in the root directory.

### Running the application

Use the command npm start in the root folder!


## Links
![Video](./)



## Usage
In this application, the user is able to create, update, and delete information in a mySQL database for different products, categories, and tags.


## Future Work
When I try to add the mySQL database I am getting this error: 
ERROR 1045 (28000): Access denied for user 'ODBC'@'localhost' (using password: NO)
Have tried multiple different solutions and need help finding the answer. My environmental var is correct, my mysql shell lets me log in after mysql -u root -p and then entering my password, but that is as far as it goes.

## Technologies
The application contains the following technologies:

```
dotenv
mysql2
express
sequelize

```


## Repo Data
This repo was contributed by RenBryant. I am a computer science student, a full-time worker, and a coding enthusiast! I love learning new things about computers and how they work and enjoy working on projects. Here is my GitHub Profile! [RenBryant](https://github.com/RenBryant). Thank you for checking out this project!