import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://afsanameem200_db_user:Tiptop200@cluster0.w4pdais.mongodb.net/food-del",
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    });
};
