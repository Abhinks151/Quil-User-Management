import express from 'express';
import { body } from 'express-validator';
import adminUserCreateController from '../../controllers/adminUserCreateController.js';
import authAdmin from '../../middleware/authAdmin.js';

const router = express.Router();

router.get('/create', authAdmin, (req, res) => {
  res.render('adminCreateUser', { error: [] });
});

router.post(
  '/create',
  authAdmin,
  [
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  adminUserCreateController
);

export default router;
