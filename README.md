# CalculatorGo 🧮

A web calculator built with **React** and **Go (Golang)**, using a REST API to perform mathematical operations. The application is containerized with Docker for easy setup and deployment.

## 🚀 Technologies

- **Frontend:** React, JavaScript, CSS3
- **Backend:** Go (Golang), REST API
- **Communication:** JSON, Fetch API
- **Containerization:** Docker, Docker Compose

## ✨ Features

- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)
- Percentage (%)
- Square Root (√)
- Input validation and error handling.

## 📋 Requirements

- Git
- Docker Desktop
- Docker Compose (included with Docker Desktop)

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone <https://github.com/Delvinol/CalculatorGo>
cd CalculatorGo
```

**2. Build and run the application**

Make sure Docker Desktop is running, then execute in CalculatorGo folder:

```bash
docker compose up --build
```

To run in the background:

```bash
docker compose up --build -d
```

**3. Access the application**

Front End:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:8080
```

**4. Stop the application**

```bash
docker compose down
```

## 🔌 REST API

**Endpoint:** `POST /calculate`

**Request example:**

```json
{
  "number1": 10,
  "number2": 5,
  "operacion": "addition"
}
```

**Response:**

```json
{
  "number1": 10,
  "number2": 5,
  "operacion": "addition",
  "result": 15
}
```

**Test using cURL:**

```bash
curl -X POST http://localhost:8080/calculate \
-H "Content-Type: application/json" \
-d '{"number1":10,"number2":5,"operacion":"addition"}'
```

Supported operations: `addition`, `reduction`, `multiply`, `division`, `percentage`, `square_root`.

## 🏗️ Design Decisions

- **Vite:** Vite provides a fast and lightweight development and build environment
- **Docker:** Runs frontend and backend in separate containers.
- **Docker Compose:** Simplifies application setup and container management.
- **Error handling:** Validates operations and prevents division by zero and invalid square roots.

## Helps
- **Github:** to create the Frontend interface I used this repository as example https://github.com/Sehan1109/Real-calculator-app I had to find a way to make this and the backend to communicate properly after!
- I asked Claude and ChatGPT regarding subjects to study this week to accomplish this project!


# AI Prompts – CalculatorGo

### 1. Node.js Version Compatibility
"I'm having problems with my Node.js version when setting up the React frontend. Can you help me identify the compatibility issue and configure the correct Node.js version to run the project?"

### 2. Frontend and Backend Integration
"I already have the React frontend and Go backend (both codes were attached) implemented, but I don't know how to make them communicate with each other. How can I connect the frontend to the Go REST API so that mathematical operations are processed by the backend?"

### 3. Add Percentage Functionality
"How can I add percentage functionality to my calculator? I want the React frontend to send the numbers and percentage operation to the Go backend, where the calculation will be processed."

### 4. Add Square Root Functionality
"I want to add a square root button to my calculator. How can I implement this feature in React and Go, including validation to prevent calculating the square root of negative numbers?"

### 5. Project Structure Review
"Can you review my entire project structure, including the frontend and backend, and identify potential improvements? I want to follow good software development practices and improve the organization, maintainability, and overall architecture of the application."

### 6. Dockerize the Application
"I want to dockerize my CalculatorGo project, which uses React with Vite for the frontend and Go for the backend. Help me create the necessary Dockerfiles and Docker Compose configuration to run both services in separate containers."

### 7. README Documentation
"I want to create a professional README.md file for my CalculatorGo project. Include step-by-step installation and configuration instructions, how to run the frontend and backend using Docker, application access URLs, REST API examples, technologies used, and design decisions. Write it in concise, professional English."


## 👨‍💻 Author

**Delvin Larez**

Software Developer

