import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`mongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(" MOngoDB connectino failed", error);
    process.exit(1);
  }
};

export default connectDB;
