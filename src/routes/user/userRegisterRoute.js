import express from 'express';
import { userRegisterController, registerGetController } from '../../controllers/userRegisterController.js';
import { validations, validateRegister } from '../../middleware/validateRegister.js';

const router = express.Router();

router.get('/', registerGetController)
router.post('/', validations, validateRegister, userRegisterController);

export default router;