const userLogoutController = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).send('Failed to log out.');
    }

    res.clearCookie('connect.sid');
    res.render('login', { error: null });
  });
}

export default userLogoutController;
