const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/upload", uploadRoutes);

module.exports = app;
