import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import messageRouter from '../routes/Message.route.js'
import conversationRouter from '../routes/Conversation.route.js'
import cors from 'cors';

dotenv.config()


console.log('Attempting to connect to MongoDB...');
console.log('MONGO env var on Vercel:', process.env.MONGO ? 'Found' : 'NOT FOUND or is empty');

// Hide sensitive parts of the string if it exists, for security
if (process.env.MONGO) {
    console.log('Connection String Preview:', process.env.MONGO.substring(0, 20) + '...');
}


mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDb')
}).catch((err) => {
    console.error('ERROR connecting to MongoDb:', err); // Use console.error for errors
});


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running.')
})


app.use(cors());

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.use('/create', messageRouter)
app.use('/conversation', conversationRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})