import User from '../models/User.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const registerGetController = (req, res) => {
  res.render('register', { error: null });
}

export const userRegisterController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new User({
      username,
      password: hashedPassword,
      role: 'user',
    });


    await newUser.save();
    return res.status(201).render('login', { error: null });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).render('register', { error: 'Registration failed' });
  }
};

