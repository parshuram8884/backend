import mongoose from "mongoose";

const UserSchame = new mongoose.Schema({
    username: {
        types: String,
        require: true,
        unique: true,
    },
    email: {
        types: String,
        require: true,
        unique: true,
    },
    password: {
        types: String,
        require: true,
        unique: true,
    },
    
},{timestamps: true})

export const User = mongoose.model('User', userSchema);