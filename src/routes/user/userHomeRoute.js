// import express from 'express';
// import { isUserLoggedIn } from './middleware/authMiddleware.js';

// const router = express.Router();

// router.get('/home', isUserLoggedIn, (req, res) => {
//   res.send(`Welcome, ${req.session.user.username}`);
// });

// export default router;

import express from 'express';
import userHomeController from '../../controllers/userHomecontroller.js';
import  {isUserLoggedIn}  from '../../middleware/authmiddleware.js';

const router = express.Router();

router.get('/', isUserLoggedIn, userHomeController);

export default router;