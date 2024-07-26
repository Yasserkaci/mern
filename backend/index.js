import express from "express";
import "dotenv/config";
import route from "./routes/workOutes.js";
import mongoose from "mongoose";
import cors from 'cors';


const port = process.env.PORT;
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use(cors());
app.use("/api/workouts", route);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(
      port,
      console.log(`connected to DB & server up on port ${port}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
