import mongoose from "mongoose";

const messageScehma = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    conversationId: {
        type: String,
        required: true
    }
    
}, { timestamps: true })

const Message = mongoose.model('Message', messageScehma)

export default Message;