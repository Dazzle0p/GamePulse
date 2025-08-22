import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected SuccessFully");
  } catch (error) {
    console.error("Mongo db CONNECTION FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
