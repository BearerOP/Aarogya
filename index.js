const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectDB } = require('./db/dbConnection');

app.get('/', (req, res) => {
  res.send('Aarogya Backend is up.');
});

console.log('Hello, world!');
dotenv.config();

connectDB();

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(
    `App listening on port ${host}:${port} on ${process.env.ENVIRONMENT}`
  );
});
