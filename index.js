import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/kitameraki");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app listening in port ${port}`);
  });
});
