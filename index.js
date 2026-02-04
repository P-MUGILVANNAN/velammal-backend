const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

// connect middlewares

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

// connect database
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Database Connected!...");
})
.catch((err)=>{
    console.log(err);
})

// create basic route
app.get('/',(req,res)=>{
    res.send("Welcome to Express JS");
})

// create routes
app.use('/api',studentRoutes);

// http://localhost:5000/api/students

// create server
app.listen(5000,()=>{
    console.log("Server is running on port 5000"); 
})
