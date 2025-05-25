import User from '../models/User.js';

export const getUpdateForm = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).send('User not found');

    const adminName = req.session.user?.username;
    res.render('updateUser', { user, adminName });
  } catch (error) {
    console.error('Error loading update form:', error);
    res.status(500).send('Internal Server Error');
  }
};


export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, role } = req.body;

    if (!username || !role) {
      return res.status(400).send('Missing required fields');
    }

    await User.findByIdAndUpdate(userId, { username, role });

    res.redirect('/admin/users');
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Internal Server Error');
  }
};
