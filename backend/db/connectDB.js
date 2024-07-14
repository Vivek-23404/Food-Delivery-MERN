import mongoose from "mongoose";


export const connectDB = async () =>{

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Food-Delivery")
    console.log("Database connected succcessfully !!!");
  } catch (error) {
    console.log(error);
  }
}