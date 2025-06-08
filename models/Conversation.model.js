import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    titleToDisplay: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required:true
    },

}, { timestamps: true })
conversationSchema.index({ createdAt: -1 });
const Conversation = mongoose.model('Conversation', conversationSchema)

export default Conversation;