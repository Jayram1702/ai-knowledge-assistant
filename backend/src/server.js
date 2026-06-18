require("dotenv").config();

const app = require("./app");

const { createCollection } = require("./services/qdrant.service");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await createCollection();

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Server start error", error);
  }
};

startServer();
