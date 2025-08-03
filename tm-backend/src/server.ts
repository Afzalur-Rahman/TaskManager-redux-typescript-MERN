import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app = express();

connectDB();

app.use(express.json()); //translator
app.use(cors()); //freindly rule
app.use(morgan("dev")); //notebook

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("api is running fine");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
