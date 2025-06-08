import Message from "../models/Message.model.js";
import Conversation from "../models/Conversation.model.js";
import { v4 as uuidv4 } from 'uuid';


export const createMessage = async (req, res, next) => {

    const { question, answer, conversationId, titleToDisplay } = req.body;

    try {
        let newConversation = null;
        let message = null

        if (!conversationId && titleToDisplay) {
            newConversation = new Conversation({ titleToDisplay,_id:uuidv4() });
            await newConversation.save();
        }

        if (question && answer && conversationId) {
            message = new Message({
                question,
                answer,
                conversationId
            });
            await message.save();
        }

        return res.status(200).json({
            message: message,
            conversation: newConversation || null
        });


    } catch (error) {
        console.group(error,'Error')
        next(error);
    }

}




