import express from 'express';
import multer from 'multer';
import * as usersCtrl from '../controllers/users.js';

const upload = multer();
const router = express.Router();

router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/signin', usersCtrl.signin);
router.get('/user/:username', usersCtrl.profile);

export default router;