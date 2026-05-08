import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL).then(async (data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
    // Ensure unique indexes (e.g. Shop.email) are actually created in MongoDB.
  });
};

export default connectDatabase;
