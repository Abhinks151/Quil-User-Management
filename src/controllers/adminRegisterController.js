import User from '../models/User.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const adminRegisterGetController =  (req, res) => {
  res.render('adminRegister', { error: null });
}

export const adminRegisterController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.render('adminRegister', { error: 'Username and password are required' });
    }

    const existingAdmin = await User.findOne({ username });

    if (existingAdmin) {
      return res.status(409).render('adminRegister', { error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newAdmin = new User({
      username,
      password: hashedPassword,
      role: 'admin',
    });

    await newAdmin.save();

    req.session.user = {
      id: newAdmin._id,
      username: newAdmin.username,
      role: newAdmin.role,
    };

    return res.status(201).render('adminLogin', { error: null });

  } catch (error) {
    console.error('Admin registration error:', error);
    return res.status(500).render('adminRegister', { error: 'Admin registration failed' });
  }
};
