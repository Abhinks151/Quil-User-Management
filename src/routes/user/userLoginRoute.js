import express from 'express';
import { userLoginController, loginGetController } from '../../controllers/userLoginController.js';
import { validations, validateLogin } from '../../middleware/validateLogin.js';

const router = express.Router();

router.get('/', loginGetController)
router.post('/', validations, validateLogin, userLoginController);

export default router;
