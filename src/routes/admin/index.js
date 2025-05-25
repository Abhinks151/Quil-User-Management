import express from 'express';
import loginRoute from './adminLoginRoute.js';
import registerRoute from './adminRegisterRoute.js';
import logoutRoute from './adminLogoutRoute.js';
import dashboardRoute from './adminDashboardRoute.js';
import usersRoute from './adminUsersRoute.js';
import adminCreateRoute from './adminCreateRoute.js';
import toggleRoute from './toggleStatusRoute.js';
import adminUpdateRoute from './adminUpdateRoute.js';
import adminDeleteUserRoute from './adminDeleteUserRoute.js';

const router = express.Router();

router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/logout', logoutRoute);
router.use('/dashboard', dashboardRoute);
router.use('/users', usersRoute);
router.use('/users', adminCreateRoute);
router.use('/users', toggleRoute);
router.use('/users', adminUpdateRoute);
router.use('/users', adminDeleteUserRoute);

export default router;
