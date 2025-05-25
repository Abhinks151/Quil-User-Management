import express from 'express';
import { adminRegisterController ,adminRegisterGetController} from '../../controllers/adminRegisterController.js';
import { validations, validateRegister } from '../../middleware/validateRegister.js';

const router = express.Router();

router.get('/', adminRegisterGetController);
router.post('/', validations, validateRegister, adminRegisterController);

export default router;
