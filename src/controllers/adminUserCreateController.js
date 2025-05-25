import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const adminUserCreateController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('adminCreateUser', { error: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // Check if username already exists instead of email
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).render('adminCreateUser', {
        error: [{ msg: 'Username already in use' }],
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.redirect('/admin/users');
  } catch (error) {
    console.error('Admin user creation error:', error.message);
    res.status(500).render('adminCreateUser', {
      error: [{ msg: 'Server error. Please try again later.' }],
    });
  }
};

export default adminUserCreateController;
