const express = require('express');
const { userRouter } = require('./routes/userRoutes');
const { port } = require('./config/config');
const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use("/api/v1/u", userRouter);

app.listen(port , ()=> console.log("Server running!!"));