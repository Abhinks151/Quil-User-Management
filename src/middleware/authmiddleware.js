export const isUserLoggedIn = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'user') {
    return next();
  }
  return res.status(401).render('login', { error: 'Unauthorized. Please log in.' });
};
