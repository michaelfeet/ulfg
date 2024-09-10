import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js'

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`The express app is running on port ${port}`);
});