import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(); 
  })

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
})