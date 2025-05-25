import express from 'express';
import { adminLoginController, adminLoginGetCOntroller } from '../../controllers/adminLoginController.js';


const router = express.Router();

router.get('/', adminLoginGetCOntroller);
router.post('/', adminLoginController);

export default router;