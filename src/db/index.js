import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // Mongoose actually give us a returned object so we can store it in a variable. See it by using console.log()
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`) // We injected a variable here. From injected variable we have .connection and then .host. It is mostly done so that we accidently connect to another DB instead of production DB, we should know that. 
    } catch (error) {
        console.log("MongoDB connection FAILED", error);
        process.exit(1); // Search more exit codes.
    }
}

export default connectDB