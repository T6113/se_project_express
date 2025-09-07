# WTWR (What to Wear?): Back End

Welcome to the back-end of WTWR (What to Wear?), a RESTful API server for a clothing recommendation and sharing app. This project powers the server-side logic, database management, and user authentication for the WTWR platform.

## Project Overview

This server provides endpoints for managing users and clothing items, including features such as:

- User registration and authentication with JWT
- Adding, updating, and deleting clothing items
- Liking and unliking items
- Data validation using Joi and Celebrate
- Centralized error handling
- Request and error logging with Winston
- Association of items with their owners

## Deployed Application

**Live Domain:** http://api.whatwewear.crabdance.com

**Frontend Repository:** https://github.com/T6113/se_project_react

## Technologies & Techniques Used

- **Node.js** & **Express.js**: For building the server and API endpoints
- **MongoDB** & **Mongoose**: For data storage and schema modeling
- **JWT (jsonwebtoken)**: For user authentication and authorization
- **bcryptjs**: For password hashing
- **Joi & Celebrate**: For request validation
- **Winston & express-winston**: For logging requests and errors
- **ESLint** & **Prettier**: For code quality and consistent formatting
- **Validator.js**: For validating user input (e.g., URLs)
- **Environment Variables**: For configuration and security
- **Error Handling**: Centralized error codes and custom error classes
- **Modular Structure**: Organized controllers, models, routes, and utilities

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

## Testing

Before committing your code, make sure you edit the file `sprint.txt` {example: SE_PROJECT_EXPRESS} in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For example: 12
