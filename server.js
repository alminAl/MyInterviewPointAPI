require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")
const userProfileRoutes = require("./routes/userProfileRoutes");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "My Interview Point API 👨‍💼👩‍💼" });
});

app.use("/api/auth/",userRoutes)
app.use("/api/user/profile", userProfileRoutes);



// connect to DB
mongoose
  .connect(`${process.env.MONGO_DB_URL}`)
  .then(() => {
    // listen for request
    app.listen(4000, () => {
      console.log("I on listen for port 4000 😎");
    });
  })
  .catch((error) => {
    console.log(error);
  });
