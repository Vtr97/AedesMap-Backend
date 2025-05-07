const express = require("express");
const mongoose = require("mongoose");
const Report = require("./models/report.model.js");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.get("/api/reports", async (req, res) => {
  try{
    const reports = await Report.find({})
    res.status(200).json(reports);
  }catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/reports", async(req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  }
  catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

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



