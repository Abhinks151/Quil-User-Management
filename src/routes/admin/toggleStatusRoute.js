import express from 'express';
import toggleBlockUser from '../../controllers/togleStatus.js';
import authAdmin from '../../middleware/authAdmin.js'

const router = express.Router();

router.post('/:id/toggle-block',authAdmin, toggleBlockUser);

export default router;
