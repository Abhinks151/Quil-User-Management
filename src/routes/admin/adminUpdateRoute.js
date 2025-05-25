import {getUpdateForm,updateUser} from '../../controllers/adminUpdateController.js';

import express from 'express';

const router = express.Router();

router.get('/:id/update', getUpdateForm);
router.post('/:id/update', updateUser);

export default router;