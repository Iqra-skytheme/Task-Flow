<img width="948" height="413" alt="image" src="https://github.com/user-attachments/assets/a5738222-6735-43e2-9913-46a128c33edb" /># 📝 TaskFlow

**TaskFlow** is a full-stack task management application built using the **MERN Stack — MongoDB, Express.js, React, and Node.js**.

It provides a clean and responsive interface for managing everyday tasks, allowing users to create, update, complete, and delete tasks while maintaining persistent data through MongoDB.

TaskFlow was developed as a practical full-stack project to strengthen skills in **React development, RESTful APIs, backend development, database integration, and client-server communication**.

---

## 📌 Overview

Managing daily tasks can become difficult when tasks are scattered or not properly organized. **TaskFlow** provides a simple digital solution for creating and managing tasks from a single interface.

The application connects a **React frontend** with a **Node.js and Express.js backend**, while **MongoDB** is used for persistent data storage.

### 🎯 Project Goals

* Build a complete full-stack MERN application.
* Implement CRUD operations for task management.
* Connect a React frontend with a RESTful backend.
* Store task data persistently using MongoDB.
* Create a clean and responsive user interface.
* Gain practical experience with client-server architecture.

---

## ✨ Features

### ➕ Create Tasks

Users can create new tasks and add them to their task list.

### ✏️ Update Tasks

Existing tasks can be modified whenever changes are required.

### ✅ Mark Tasks as Completed

Users can mark tasks as completed to keep track of their progress.

### 🗑️ Delete Tasks

Tasks that are no longer needed can be removed from the application.

### 💾 Persistent Data Storage

Task information is stored in **MongoDB**, allowing the data to persist beyond the current session.

### ⚡ RESTful API Integration

The React frontend communicates with the Express.js backend through RESTful API requests.

### 📱 Responsive Interface

The application provides a responsive interface designed to work across different screen sizes.

---

## 🛠️ Tech Stack

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **React.js**          | Building the frontend user interface       |
| **JavaScript (ES6+)** | Application logic and interactivity        |
| **HTML5**             | Web page structure                         |
| **CSS3**              | Styling and responsive design              |
| **Node.js**           | Backend runtime environment                |
| **Express.js**        | Backend server and RESTful API development |
| **MongoDB**           | Persistent data storage                    |
| **Mongoose**          | MongoDB interaction and data modeling      |
| **Git & GitHub**      | Version control and project hosting        |

---

## 🔄 How It Works

TaskFlow follows a client-server architecture where the frontend, backend, and database work together.

### 1. User Interaction

The user interacts with the TaskFlow interface through the React frontend.

### 2. Task Management

Users can create, update, complete, or delete tasks using the application.

### 3. API Request

When a task-related action is performed, the React frontend sends a request to the Express.js backend.

### 4. Backend Processing

The Node.js and Express.js server receives and processes the request.

### 5. Database Operation

The backend communicates with MongoDB using Mongoose to store, retrieve, update, or delete task data.

### 6. Response

The backend sends the result back to the React frontend, allowing the interface to display the updated task information.

---

## 🖥️ Screenshots

### 🏠 TaskFlow Interface

<img width="948" height="413" alt="image" src="https://github.com/user-attachments/assets/ab6beee5-54ab-4806-9838-94eb6e3d39ad" />


### ➕ Create Task

<img width="940" height="412" alt="image" src="https://github.com/user-attachments/assets/f122d692-c25d-41e8-bfea-9aa0b6be41eb" />


### ✏️ Update Task

<img width="947" height="409" alt="image" src="https://github.com/user-attachments/assets/e85a120e-3cfd-4667-86b7-640ffac931fa" />


### ✅ Completed Task

<img width="947" height="410" alt="image" src="https://github.com/user-attachments/assets/42a7f07e-a9e2-4ca3-be71-119e57c86650" />


---

## 🚀 Installation & Setup

### Prerequisites

Make sure you have the following installed:

* **Node.js**
* **npm**
* **MongoDB** or **MongoDB Atlas**
* **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/Iqra-skytheme/Task-Flow.git
```

### 2. Navigate to the Project

```bash
cd Task-Flow
```

### 3. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd Frontend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file in the backend directory and add your MongoDB connection string and server configuration.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

> Never commit your `.env` file or database credentials to GitHub.

### 6. Run the Backend

From the `Backend` directory:

```bash
npm run dev
```

### 7. Run the Frontend

From the `Frontend` directory:

```bash
npm run dev
```

The frontend and backend will then run as separate development services.

> The exact commands may vary depending on the scripts defined in your `package.json` files.

---

## 💡 Key Learning Outcomes

Developing TaskFlow provided hands-on experience with:

* ⚛️ React component-based development
* 🟢 Node.js backend development
* 🚀 Express.js REST API development
* 🍃 MongoDB database integration
* 🔗 Frontend-backend communication
* 🔄 CRUD operations
* 🗄️ Data modeling with Mongoose
* 📱 Responsive web design
* 🌐 Client-server architecture
* 🔐 Environment variable management
* 🐙 Git and GitHub workflow

---

## 🎯 Challenges & Solutions

### 1. Implementing CRUD Functionality

TaskFlow requires multiple operations for managing tasks, including creating, updating, completing, and deleting them.

**Solution:**
CRUD functionality was implemented through RESTful API endpoints and connected to MongoDB through the backend.

### 2. Connecting React with Express

The frontend and backend need to communicate correctly whenever users interact with tasks.

**Solution:**
API requests were implemented to allow the React frontend to communicate with the Express.js backend.

### 3. Persistent Database Storage

Tasks need to remain available after refreshing or reopening the application.

**Solution:**
MongoDB was integrated with the backend to provide persistent storage, with Mongoose handling database interaction.

### 4. Responsive User Interface

The application needed to remain easy to use across different screen sizes.

**Solution:**
Responsive CSS techniques were used to adapt the interface to different viewport sizes.

---

## 🔮 Future Enhancements

The current version of TaskFlow can be extended with additional functionality, including:

* 🔐 **User Authentication** — Add secure registration and login using JWT.
* 🎯 **Task Priorities** — Allow users to assign priority levels to tasks.
* 📅 **Due Dates & Reminders** — Add deadlines and reminders for upcoming tasks.
* 🔎 **Search & Filtering** — Make it easier to find specific tasks.
* 🖱️ **Drag-and-Drop Organization** — Allow users to organize tasks visually.
* 📊 **Task Analytics** — Add statistics and progress insights.
* 🌙 **Dark Mode** — Provide an alternative visual theme.

> These are proposed future enhancements and are not part of the current feature set unless implemented.

---

## 👩‍💻 About the Developer

**Iqra** is a Software Engineering student and aspiring software developer interested in building practical applications and exploring modern web technologies.

TaskFlow was developed as a full-stack project to gain practical experience with the **MERN stack**, RESTful APIs, database integration, and modern web application development.

### Connect With Me

* **GitHub:** [Iqra-skytheme](https://github.com/Iqra-skytheme)
* **LinkedIn:** https://www.linkedin.com/in/iqra-hussain

---

## ⭐ Project Highlights

TaskFlow demonstrates practical experience in:

* ⚛️ **React.js frontend development**
* 🟢 **Node.js & Express.js backend development**
* 🍃 **MongoDB & Mongoose database integration**
* ⚡ **RESTful API development**
* 🔄 **CRUD operations**
* 🔗 **Frontend-backend integration**
* 📱 **Responsive web development**
* 🏗️ **Full-stack MERN architecture**

---

## 🔗 Project Links

**GitHub Repository:**
https://github.com/Iqra-skytheme/Task-Flow
