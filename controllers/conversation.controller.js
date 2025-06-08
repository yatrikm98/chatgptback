import Message from "../models/Message.model.js";
import Conversation from "../models/Conversation.model.js";

export const getConversationOfParticularRoute = async (req, res, next) => {
    try {
        let path = req.params.id
        const data = await Message.find({ conversationId: path }).sort({ createdAt: 1 });
        if (!data) {
            return next(errorHandler(401, 'Data is not present in database'))
        }
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}


export const getConversationList = async (req, res, next) => {
    try {
        const manuallyAddedConversation = parseInt(req.query.manuallyAddedConversation) || 0
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const offset = (page - 1) * limit + manuallyAddedConversation;

        const conversationList = await Conversation.find()
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit);

        return res.status(200).json(conversationList)

    } catch (error) {
        next(error)
    }
}


export const getOneParticularCOnversation = async (req, res, next) => {
    try {
        const _id = req.params.id
        const conversation = await Conversation.findOne({ _id })
        return res.status(200).json(conversation)
    } catch (error) {
        next(error)
    }
}

