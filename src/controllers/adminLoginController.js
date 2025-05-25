import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const adminLoginGetCOntroller = (req,res)=>{
  res.render('adminLogin', { error: null });
}


export const adminLoginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).render('adminLogin', { error: 'Username and password are required' });
    }

    const admin = await User.findOne({ username });

    if (!admin || admin.role !== 'admin') {
      return res.status(401).render('adminLogin', { error: 'Invalid username or password' });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).render('adminLogin', { error: 'Invalid username or password' });
    }

    req.session.user = {
      id: admin._id,
      username: admin.username,
      role: admin.role,
    };

    return res.status(200).redirect('/admin/dashboard');

  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).render('adminLogin', { error: 'Admin login failed' });
  }
};
