import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from './helper/connect.js';
import authroutes from './helper/authroutes.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
connect().catch(err => {
  console.error('Database connection error:', err);
  process.exit(1);
});

app.use("/api/auth", authroutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
