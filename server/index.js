import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'
import Routes from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';

// initializing express
const app = express();

// Initializing PORT
const PORT = 3000;

// configuring env file
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//using cors() to remove cors issue
app.use(cors());

//using route.js to use Route for adding 
app.use('/', Routes)

//using const variable to share data from env file
const db_url = process.env.DB_URL;

//Calling database
Connection(db_url);

//listening on PORT 
app.listen(PORT, console.log(`Server is running successfully on PORT:${PORT}`));