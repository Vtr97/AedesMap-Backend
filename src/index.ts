import express from "express";
import mongoose from "mongoose";
import reportsRouter from "./routes/reports.route";
import usersRouter from "./routes/users.route";
const app = express();

app.use(express.json());

app.use("/api/reports",reportsRouter);
app.use("/api/users",usersRouter);


mongoose.connect("mongodb://localhost:27017/aedesmap")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
