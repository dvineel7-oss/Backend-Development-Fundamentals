# Lab 1: Node.js and Express Server

## Student Details
- **Name:** Dhanyasi Vineel Kumar
- **Registration Number:** 252U1R8016
- **Section:** CSE-QE-2A

## Live Link
https://backend-development-fundamentals-lab-1-zhmi.onrender.com

## GitHub Repository
https://github.com/dvineel7-oss/Backend-Development-Fundamentals

## Project Description
This project demonstrates how to create a basic web server using Node.js HTTP module and Express.js.

## Technologies Used
- Node.js
- Express.js
- JavaScript

## How to Install and Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal inside the `lab-01` folder.
4. Install dependencies:

```bash
npm install
```

5. Start the Express server:

```bash
node server.js
```

6. Open http://localhost:3000 in your browser.

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/` | Displays welcome message |
| GET | `/about` | Displays student details |
| GET | `/time` | Displays current date and time |
| GET | `/contact` | Returns 404 for unknown route |

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### About Page
![About Page](screenshots/about.png)

### Time Page
![Time Page](screenshots/time.png)

### 404 Page
![404 Page](screenshots/404.png)

## Notes
- Created a Node.js HTTP server using `http.createServer()`.
- Created an Express server.
- Implemented GET routes.
- Implemented a 404 response for unknown routes.
- Tested the endpoints successfully.