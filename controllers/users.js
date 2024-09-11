import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import S3 from 'aws-sdk/clients/s3.js';
import { v4 as uuidv4 } from 'uuid';
import UserModel from '../models/userModel.js';
import PostModel from '../models/postModel.js'

const s3 = new S3();
const signup = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Please submit a Photo.' });
    }
    if (req.body.password !== req.body.passwordConf) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }
    try {
        const checkForUsername = await UserModel.findOne({ username: req.body.username });
        if (checkForUsername) {
            return res.status(400).json({ error: 'Username has already been taken.' });
        }
        const checkForEmail = await UserModel.findOne({ email: req.body.email });
        if (checkForEmail) {
            return res.status(400).json({ error: 'Email has already been taken.' });
        }
        try {
            const verifyUserModel = new UserModel({ ...req.body, photoUrl: req.file.originalFileName });
            await verifyUserModel.validate();
            const filePath = `new12/${uuidv4()}-${req.file.originalname}`;
            const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer };
            s3.upload(params, async (err, data) => {
                if (err) {
                    console.log('error from aws');
                    return res.status(500).json({ error: 'server issue with aws' });
                }
                req.body.password = bcrypt.hashSync(req.body.password, 10);
                req.body.passwordConf = bcrypt.hashSync(req.body.passwordConf, 10);
                const createdUser = await UserModel.create({ ...req.body, photoUrl: data.Location });
                const token = jwt.sign({ user: createdUser }, process.env.JWT_SECRET);
                res.status(201).json({ token });
            });
        } catch (err) {
            console.log(err);
            if (err.name === "ValidationError") {
                let errors = {};
                Object.keys(err.errors).forEach((key) => {
                    errors[key] = err.errors[key].message;
                });
                let errorMessage = Object.values(errors)[0];
                return res.status(400).json({ error: errorMessage });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const signin = async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ user }, process.env.JWT_SECRET);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid Username or Password' });
        }
    } catch (err) {
        throw new Error(err);
    }
}

const profile = async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.params.username });
        if (!user) return res.status(404).json({ error: 'User not found' });
        const posts = await PostModel.find({ user: user._id }).sort({ time: -1 }).populate('user').exec();
        res.status(200).json({
            data: posts,
            user: user
        });
    } catch (err) {
        res.status(400).json({ err });
    }
}

export {
    signup,
    signin,
    profile
}