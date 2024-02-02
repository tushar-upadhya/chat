import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected DB");
  } catch (error) {
    console.log("error:", error.message);
  }
};

export default connectToMongoDB;
