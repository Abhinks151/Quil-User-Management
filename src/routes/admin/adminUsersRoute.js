import express from 'express';
import { adminUsers } from '../../controllers/adminUsers.js';
import authAdmin from '../../middleware/authAdmin.js'

const router = express.Router();

router.get('/', authAdmin, adminUsers);

export default router;