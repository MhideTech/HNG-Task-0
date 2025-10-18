# Simple User and Cat Fact API

This is a simple Node.js and Express.js application that provides a single API endpoint to retrieve static user information and a random cat fact.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)

## Features

- A single endpoint `GET /me` to retrieve user data.
- Integrates with the Cat Fact Ninja API to provide a random cat fact with each request.
- Basic error handling.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.x or later is recommended)
- npm (which comes with Node.js) or yarn

## Installation

1.  Clone the repository or download the source code.

2.  Navigate to the project directory:
    ```bash
    cd HNG-STAGE-0
    ```

3.  Install the required dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the server, run the following command from the root of the project:

```bash
node server.js
```

The server will start and listen on port 3000. You will see the following message in your console:

```
Server is running on port 3000
```

You can now access the API at `http://localhost:3000`.

## API Documentation

### GET /me

Retrieves static user information along with a timestamp and a random cat fact.

**URL** : `/me`

**Method** : `GET`

**Success Response:**

*   **Code:** 200 OK
*   **Content:**

    ```json
    {
      "status": "success",
      "user": {
        "email": "okefolahanolamide2006@gmail.com",
        "name": "Okefolahan Olamide Israel",
        "stack": "Node.js/Express.js"
      },
      "timestamp": "2024-07-14T10:30:00.123Z",
      "fact": "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance."
    }
    ```

**Error Response:**

If the external Cat Fact API is unavailable or there is another server-side issue.

*   **Code:** 500 Internal Server Error
*   **Content:**
    ```json
    {
      "status": "error",
      "message": "Could not fetch posts."
    }
    ```

## Technologies Used

- Node.js
- Express.js
- axios for making HTTP requests
- cors for enabling Cross-Origin Resource Sharing
