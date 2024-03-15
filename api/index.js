import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import userRouter from "./routes/user.route.js";



dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MONGoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Stocks is there!!");
});



app.listen(3000, () => {
  console.log("Server is runnig on port 3000");
});

app.use('/api/user',userRouter);