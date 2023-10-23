import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        manaCost: {
            type: String,
            required: true,
        },
        oracleText: {
            type: String,
            required: true,
        },
        color: {
            type: Array,
            required: false
        },
        cardImg : {
            type : Object,
            required: true
        },
        cardQuantity: {
            type: Number,
            required: true
        }
    }
)

export const Card = mongoose.model('Card', cardSchema);