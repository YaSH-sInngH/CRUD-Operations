# User Management System (CRUD Application)

![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green)

---

## Description

The **User Management System** is a CRUD (Create, Read, Update, Delete) application designed to manage user records efficiently. It provides a user-friendly interface to add, view, edit, and delete users. This project is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and Material-UI for the frontend design.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Material-UI (for styling)
  - React Router (for navigation)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
- **Other Tools**:
  - Axios (for API calls)
  - Mongoose (for MongoDB object modeling)
---
### Key Features:
- **Add New Users**: Easily add new users with details like name, email, phone, and role.
- **View All Users**: Display a list of all users in a clean and responsive table.
- **Edit Users**: Update user details with a simple form.
- **Delete Users**: Remove users from the system with a single click.
- **Home Page Overview**: Get a quick summary of total users, active users, and recent activity.
---
## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   https://github.com/YaSH-sInngH/CRUD-Operations.git
   cd CRUD-OPERATIONS
2. **Install Backend Dependencies**:
    ```
    cd server
    npm install
3. **Install Frontend Dependencies**:
   ```
   cd client
   npm install
4.**Set up environment variables:**
- Create a .env file in the backend folder and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb://localhost:27017/your_database_name
    PORT=3000
5. **Run the backend server:**
    ```
    cd server
    npm start

6. **Run the frontend development server:**
    ```
    cd client
    npm run dev

7. **Access the application:** Open your browser and go to http://localhost:3000

---
## Acknowledgments

- [Material-UI](https://mui.com/) for the awesome UI components.
- [MongoDB](https://www.mongodb.com/) for the database.
- [React Router](https://reactrouter.com/) for navigation.