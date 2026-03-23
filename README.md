# Crochet-Yarn-Projects

A full-stack crochet projects library app built with **Next.js (TypeScript)** on the frontend, **Node.js and Express** on the backend, and **MongoDB** as the database. 

The app displays all projets - **on going**, **on pause** and **completed** - which can be filtered by the status using a dropdown, or by name using the search-bar. Projects can be viewed, edited, deleted and new projects can be added.

---

## Video Demo

[![Watch the video](https://img.youtube.com/vi/0jjVpNfqSjg/0.jpg)](https://www.youtube.com/watch?v=0jjVpNfqSjg)

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [MongoDB](https://www.mongodb.com/) account with a database that matches the format needed for the app _(details in **section 2**)_.

---

## Project Structure

```
Crochet-Yarn-Projects/
├── server/       # Node.js and Express backend
└── crochet-ui/       # Next.js TypeScript frontend
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/marika-sa/Crochet-Yarn-Projects.git
cd Crochet-Yarn-Projects
```

---

### 2. Set Up the Database (MongoDB)

Go to [MongoDB](https://www.mongodb.com/) make an account (if you don't have one already).

First, create a new database under any relevant name, however make sure the **Collection Name** is set to **_projects_**.

For the data, use the following structure to add porjects into your new database:

```json
{
  "title": "Granny square blanket",
  "dateStarted": "2025-05-01",
  "status": "Ongoing",
  "link": "https://www.youtube.com/watch?v=euqnRKNJaXo"
}
```

The **ID** gets added by MongoDB automatically so it can be ommited when creating the data.

---

### 3. Set Up the Server (Node.js + Express)

Navigate to the server folder:

```bash
cd server
```

Add your Connection String (ensure it is **NOT** the SRV type) to `.env` - use the `example.env` file for the structure.

Restore dependencies and run the server:

```bash
npm install
npm run dev
```

The server will start on `http://localhost:{YOUR_PORT}` where the port is defined in your `.env` file. You can verify it's running by visiting:

```
http://localhost:{YOUR_PORT}/api/projects
http://localhost:{YOUR_PORT}/api/projects/{project._id}
```

These should be available while running the server.

---

### 4. Set Up the Client (Next.js)

Open a new terminal and navigate to the client folder:

```bash
cd crochet-ui
```

Install dependencies:

```bash
npm install
```

_Before running the app, in the `crochet-ui/services/api.ts` file, update the port to the same one you defined in your server `.env`._

The run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.


---

## Running Both Servers

You will need two terminals running simultaneously:

| Terminal   | Command                        | URL                          |
| ---------- | ------------------------------ | ---------------------------- |
| Server     | `cd server && npm run dev`     | http://localhost:{YOUR_PORT} |
| crochet-ui | `cd crochet-ui && npm run dev` | http://localhost:3000        |

---

## API Endpoints

All endpoints are proxied through Next.js - the client calls `/api/...` and Next.js forwards to the Node.js server automatically.

| Method | Endpoint                      | Description                              |
| ------ | ----------------------------- | ---------------------------------------- |
| GET    | `/api/projects`               | Returns all projects                     |
| GET    | `/api/projects/{project._id}` | Returns information of the given project |

---

## Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | Next.js, TypeScript, React |
| Backend  | Node.js, Express           |
| Database | MongoDB                    |
