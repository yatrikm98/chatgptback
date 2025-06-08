import express from 'express'
import { createMessage } from '../controllers/message.controllers.js';

const router = express.Router()

router.post('/message', createMessage)

export default router;