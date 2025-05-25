import { check, validationResult } from 'express-validator';



const validations = [
  check('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  check('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];


const validateRegister = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    return res.status(400).render('register', { error: errors.array() });
  }
  next();
};

export { validations, validateRegister };
