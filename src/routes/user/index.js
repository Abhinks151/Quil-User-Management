import express from 'express';
import loginRoute from './userLoginRoute.js';
import registerRoute from './userRegisterRoute.js';
import homeRoute from './userHomeRoute.js';
import logoutRoute from './userLogoutRoute.js';

const router = express.Router();

router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/home', homeRoute);
router.use('/logout', logoutRoute);

export default router;
