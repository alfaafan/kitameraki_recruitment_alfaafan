# Programming Test for Kitameraki Developer Position
This is a repository for Kitameraki recruitment process. This project is divided into 2 parts. You can click links below to navigate to the project's branches.

For part one, the assignment is to create the backend of a Task Management App. The application allows users to add, view, update, and delete tasks. I use Node.js with express framework, and mongoDB with mongoose ODM for the backend.

For part two, the assignment is to implement basic authentication and authorization using JWT for the API created in part one.

## Branches
- [Part One](https://github.com/alfaafan/kitameraki_recruitment_alfaafan/tree/part_one)
- [Part Two](https://github.com/alfaafan/kitameraki_recruitment_alfaafan/tree/part_two)

## Prerequisites
Before running the API, make sure you have the following prerequisites installed on your system:

1. Node.js (<https://nodejs.org>)
2. Package manager (I use Yarn)
3. MongoDB (<https://www.mongodb.com>)

## Installation
To set up the API, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Checkout to the chosen project branch (eg. part_one)
4. Install the required dependencies by running:

   ```
   yarn install
   ```

## Configuration
Before running the API, you need to set up the environment variables. Create a `.env` file based on the provided `.env.example` file. You can do this by running the following command:

```bash
cp .env.example .env
```

Then, open the `.env` file and fill in the values for the environment variables according to your setup.

## Database Schema
This section provides an in-depth description of the model schemas used within the Task Management API.

### Task Schema
 outlines the structure of task featured within the application. Tasks are items that users can interact with, potentially creating new task or view the tasks of the user. Each task includes:
 
- **_id**: Unique identifier for the task
- **title**: The name or title of the task.
- **description**: The description of the task.
- **dueDate**: Due date and time for the task.
- **priority**: Priority level of the task.
- **status**: the status of the task.
- **tags**: Tags associated with the task

## API Structure
The organization of the code into different folders follows a modular approach, promoting code reusability and maintainability. Below is an overview of each folder and its purpose:

### 1. models
The `models` folder contains Mongoose models. Mongoose models are JavaScript classes that define the structure of the documents in the MongoDB collections. They represent the data and functionalities of the MongoDB documents and provide an abstraction layer over the database.
### 2. controllers
The `controllers` folder is responsible for handling incoming HTTP requests from clients (such as web browsers or API consumers), processing the data, interacting with the model (the data layer), and returning an appropriate HTTP response.
### 3. routes
The `routes` folder contains route handlers or route files. These handlers are organized by route or resource to keep the code modular and maintainable.
### 4. services
The `services` folder contains business logic or services related to the application. Services encapsulate the application's business rules and handle complex operations that involve multiple models or components. They promote separation of concerns and make the codebase more organized.
### 5. utils
The `utils` folder contains utility functions that provide commonly used functionalities or helper methods that can be reused throughout the application. These utility functions improve code readability and avoid code duplication.
### 6. middlewares
The `middlewares` folder contains custom middleware functions. Middleware functions are functions that have access to the request and response objects and can perform actions before or after the main request handler. They can be used for tasks such as authentication, logging, or data validation. Centralizing middleware logic in this folder promotes code modularity and reusability.
### 7. tests
The `tests` folder typically used to house test scripts and test-related files for testing the functionality of the application's code.

## API endpoints
The API endpoints list can be accessed through <http://localhost:3000/api/v1/api-docs/> 

## How to Use
To start the API, run the following command in the terminal:

```
yarn dev
```

The API server will start, and you can access the app at `http://localhost:3000` (assuming the default port is used).

## How to run tests
Since I used ES6 modules for the project, the tests in the part one branch can be run with: 
```
yarn node --experimental-vm-modules node_modules/jest/bin/jest.js
```
