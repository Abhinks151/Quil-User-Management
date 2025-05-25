// import User from '../models/User.js';

// export const adminUsers = async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.render('users', { adminName: req.session.admin.name, users });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).render('users', { users: [], error: 'Failed to fetch users' });
//   }
// };

import User from '../models/User.js';

export const adminUsers = async (req, res) => {
  try {
    const searchQuery = req.query.search || '';
    const adminName = req.session.user?.username;

    const users = await User.find({
      username: { $regex: searchQuery, $options: 'i' }
    });

    res.status(200).render('users', { users, adminName, searchQuery });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
};

