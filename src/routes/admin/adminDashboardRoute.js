import express from 'express';
import { adminDashboardController } from '../../controllers/adminDashboard.js';
import authAdmin from '../../middleware/authAdmin.js'

const router = express.Router();

router.get('/',authAdmin, adminDashboardController);

export default router;