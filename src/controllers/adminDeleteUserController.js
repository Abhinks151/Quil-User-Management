import User from '../models/User.js';

export const adminDeleteUserController = async (req, res) => {
  const userId = req.params.id;

  try {
    const userToDelete = await User.findById(userId);

    if (!userToDelete) {
      return res.status(404).send('User not found');
    }

    await User.findByIdAndDelete(userId);

    res.redirect('/admin/users');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
};


