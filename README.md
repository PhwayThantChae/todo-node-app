# README

## Pre-requisites
- Node v18.16.0
- MongoDB

## Setting up Development Instance
- Create a new mongodb database
- Run ``npm install``.
- Run ``npm start`` to start the server.

### Environment Variables
- You need to add the following environment variables on production deployment:
	- MONGO_DB_URL
	- JWT_SECRET

## User API List

### Sign In
- **Endpoint:** `/api/v1/auth/sign_in`
- **Method:** POST
- **Description:** User sign in.
- **Request:**
  - Body: JWT Token
- **Response:**
  - Status Code: 201 (Created)
  - JWT Token

### Sign In
- **Endpoint:** `/api/v1/auth/register`
- **Method:** POST
- **Description:** User registration.
- **Request:**
  - Body: User object
- **Response:**
  - Status Code: 201 (Created)
  - Created user object

### Get User Profile
- **Endpoint:** `/api/v1/profile`
- **Method:** GET
- **Description:** Get user profile.
- **Response:**
  - Status Code: 200 (OK)
  - Body: User object

## Todo API List

### Get Todos
- **Endpoint:** `/api/v1/todos`
- **Method:** GET
- **Description:** Retrieve all todos.
- **Response:**
  - Status Code: 200 (OK)
  - Body: Array of todos

### Get Todo
- **Endpoint:** `/api/v1/todos/:id`
- **Method:** GET
- **Description:** Retrieve a specific todo by ID.
- **Parameters:**
  - `id` (string) - ID of the todo.
- **Response:**
  - Status Code: 200 (OK)
  - Body: Todo object

### Create Todo
- **Endpoint:** `/api/v1/todos`
- **Method:** POST
- **Description:** Create a new todo.
- **Request:**
  - Body: Todo object
- **Response:**
  - Status Code: 201 (Created)
  - Body: Created todo object

### Update Todo
- **Endpoint:** `/api/v1/todos/:id`
- **Method:** PUT
- **Description:** Update a specific todo by ID.
- **Parameters:**
  - `id` (string) - ID of the todo.
- **Request:**
  - Body: Updated todo object
- **Response:**
  - Status Code: 200 (OK)
  - Body: Updated todo object

### Soft Delete Todo
- **Endpoint:** `/api/v1/todos/:id`
- **Method:** DELETE
- **Description:** Delete a specific todo by ID.
- **Parameters:**
  - `id` (string) - ID of the todo.
- **Response:**
  - Status Code: 200 (OK)
  - Body: Soft deleted todo object

