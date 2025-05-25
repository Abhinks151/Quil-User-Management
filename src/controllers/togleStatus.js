import User from '../models/User.js';

const toggleStatus = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).send('User not found');

    user.isBlocked = !user.isBlocked;
    await user.save();

    res.redirect('/admin/users');
  } catch (error) {
    console.error('Error toggling user block status:', error);
    res.status(500).send('Server error');
  }
};

export default toggleStatus;
