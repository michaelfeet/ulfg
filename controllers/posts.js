import S3 from 'aws-sdk/clients/s3.js';
import { v4 as uuidv4 } from 'uuid';
import PostModel from '../models/postModel.js';

const s3 = new S3()

const create = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({ error: 'Please submit a Title' });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Please submit a Photo.' });
        }
        const filePath = `new12/${uuidv4()}-${req.file.originalname}`;
        const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer };
        s3.upload(params, async (err, data) => {
            if (err) {
                console.log('error from aws');
                return res.status(500).json({ error: 'server issue with aws' });
            }
            const post = await PostModel.create({
                title: req.body.title,
                user: req.user,
                photoUrl: data.Location
            });
            await post.populate('user');
            res.status(200).json({ post });
        });
    } catch (err) {
        console.log(err);
    }
}

const index = async (req, res) => {
    try {
        const posts = await PostModel.find({}).sort({ time: -1 }).populate('user').exec();
        res.status(200).json({ posts });
    } catch (err) {
        console.log(err);
    }
}

const getOnePost = async (req, res) => {
    try {
        const post = await PostModel.findById({ _id: req.params.id }).populate('user').exec();
        res.status(200).json({ post });
    } catch (err) {
        res.status(400).json({ error: 'error in postctrl getOnePost' });
    }
}

const deletePost = async (req, res) => {
    try {
        await PostModel.findByIdAndDelete(req.params.id);
        res.status(201).json({});
    } catch (err) {
        res.status(400).json({ error: 'error in postctrl deletePost' });
    }
}

export {
    create,
    index,
    getOnePost,
    deletePost
}