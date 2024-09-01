import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from './helper/connect.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
connect();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
