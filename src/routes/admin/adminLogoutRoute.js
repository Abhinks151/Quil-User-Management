import express from 'express';
import {adminLogoutController} from '../../controllers/adminLogoutController.js';
const router = express.Router();

router.post('/', adminLogoutController);

export default router;