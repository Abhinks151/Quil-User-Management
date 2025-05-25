import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const loginGetController = (req, res) => {
  res.status(200).render('login', { error: null });
}

export const userLoginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).render('login', { error: 'Invalid credentials' });
    }
    if (user.isBlocked) {
      return res.status(403).render('login', {
        error: 'Your account is blocked. Contact admin.',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).render('login', { error: 'Invalid credentials' });
    }

    req.session.user = {
      id: user._id,
      username: user.username,
      role: user.role,
    };

    res.status(200).redirect('/user/home');
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Server error');
  }
};

