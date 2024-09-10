import express from 'express';
import multer from 'multer';
import * as postsCtrl from '../controllers/posts.js';
import { verifyToken } from '../config/verifyToken.js';

const upload = multer();
const router = express.Router();

router.post('/', verifyToken, upload.single('photo'), postsCtrl.create);
router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.getOnePost);
router.delete('/:id', postsCtrl.deletePost);

export default router;