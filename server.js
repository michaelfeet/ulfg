import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);


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

app.use(express.static(path.join(__dirname, '/dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')));

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`The express app is running on port ${port}`);
});