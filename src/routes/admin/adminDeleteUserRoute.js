import express from 'express';
import {adminDeleteUserController} from '../../controllers/adminDeleteUserController.js';
import authAdmin from '../../middleware/authAdmin.js';

const router = express.Router();

router.delete('/:id', authAdmin, adminDeleteUserController);

export default router;
