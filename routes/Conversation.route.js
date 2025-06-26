import express from 'express'
import { getConversationOfParticularRoute, getConversationList,getOneParticularCOnversation } from '../controllers/conversation.controller.js'

const router = express.Router()


router.get('/conversationlist', getConversationList)
router.get('/get/:id', getConversationOfParticularRoute)
router.get('/getconversation/:id',getOneParticularCOnversation)

export default router;