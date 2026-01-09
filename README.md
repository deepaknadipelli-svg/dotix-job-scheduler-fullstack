# Dotix Job Scheduler & Automation System

A full-stack job scheduling and automation system that allows users to create background jobs, run them manually, track job status, and simulate real-world background task execution.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- HTML & CSS
- Fetch API

### Backend
- Node.js
- Express.js
- REST API architecture

### Database
- MySQL

### Tools
- MySQL Workbench
- Git & GitHub
- Visual Studio Code

---

## ✨ Features

- Create background jobs with task name and priority
- Store jobs in MySQL database
- View all jobs in a dashboard
- Track job lifecycle:
  - Pending
  - Running
  - Completed
- Run jobs manually from the UI
- Simulated background execution using timers
- Clean separation of frontend and backend

---

## 📂 Project Structure

dotix-job-scheduler-fullstack/
│
├── backend/
│ ├── app.js
│ ├── routes/
│ ├── controllers/
│ ├── database/
│ │ └── db.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── services/api.js
│ ├── index.html
│ └── package.json
│
└── README.md


---

## 🖥️ How to Run Locally

### Prerequisites
- Node.js (v18 or above)
- MySQL Server
- MySQL Workbench
- Git

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/deepaknadipelli-svg/dotix-job-scheduler-fullstack
cd dotix-job-scheduler-fullstack

Step 2: Setup Database

Open MySQL Workbench and run the following SQL:

CREATE DATABASE dotix_jobs;
USE dotix_jobs;

CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  taskName VARCHAR(255) NOT NULL,
  payload JSON,
  priority VARCHAR(20),
  status VARCHAR(20) DEFAULT 'pending',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  completedAt TIMESTAMP NULL
);

Step 3: Configure Backend

Update database credentials in:

backend/database/db.js

password: 'MYSQL_PASSWORD'

Step 4: Run Backend Server
cd backend
npm install
npm start


Backend will run on:

http://localhost:5000

Step 5: Run Frontend Server

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173
