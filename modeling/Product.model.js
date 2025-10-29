import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    OrderPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    quantity: {
        type: Number,
    },
    address:
        [
            {
            country: {
                type: String,
                require: true,
            },
            state: {
                type: String,
                require: true,
            },
            pinCode: {
                type: Number,
                require: true,
            },
            plotNo:{
                type: Number,
                require: true,
            },
            flatNo:{
                type: Number,
                require: true,
            },
            landMark:{
                type: String,
                require: true,
            }

            }

        ],
    status: {
        type: String,
        enum: ["Pending","Cancle","Deliver"],
        default: "Pending",
    }
    

},{timestamps: true})

export const Product = mongoose.model("Product",productSchema)