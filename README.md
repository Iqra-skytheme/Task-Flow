# TaskFlow 📝

TaskFlow is a full-stack task management application built using the MERN Stack (MongoDB, Express.js, React, and Node.js). It provides a clean and responsive interface for organizing daily tasks while storing data securely in a MongoDB database.

## 🚀 Features

- ➕ Create new tasks
- ✏️ Update existing tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 💾 Persistent task storage with MongoDB
- 📱 Responsive user interface
- ⚡ RESTful API integration

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

## 📂 Project Structure

```
TaskNest/
│
├── frontend/          # React frontend
├── backend/          # Node.js & Express backend
├── models/          # Mongoose models
├── routes/          # API routes
├── controllers/     # Business logic
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/tasknest.git
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Install backend dependencies

```bash
cd ../backend
npm install
```

### Configure environment variables

Create a `.env` file in the server folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Run the application

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
```

## 📌 Future Enhancements

- User authentication (JWT)
- Task priorities
- Due dates and reminders
- Search and filtering
- Drag-and-drop task organization

## 👩‍💻 Author

Iqra
