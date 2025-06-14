export default function isAdminLoggedIn(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === "admin") {
    return next();
  }
  return res.redirect('/admin/login');
}
