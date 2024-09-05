const express = require('express');
const { userRouter } = require('./routes/userRoutes');
const { port } = require('./config/config');

const app = express();

app.use(express.json());

app.use("/api/v1/u", userRouter);

app.listen(port);