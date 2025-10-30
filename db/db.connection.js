import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connect = await mongoose.connect("mongodb+srv://mohitparshuramthakur234:0SWOPfmcYl4BKGRj@cluster0.trij3.mongodb.net/?appName=Cluster0/DBName")
        console.log(`connection sucessfully ${connect.connection.host}`)
    } catch (error) {
        console.error("database connect failed Try again")
    }
}

export default connectDB;