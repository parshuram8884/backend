import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connect = await mongoose.connect("")
        console.log(`connection sucessfully ${connect.connection.host}`)
    } catch (error) {
        console.error("database connect failed Try again")
    }
}

export default connectDB;
