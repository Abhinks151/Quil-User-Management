export const adminDashboardController = (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).render('adminLogin', { error: 'Unauthorized access' });
  }

 
  res.status(200).render('adminHome', { adminName: req.session.user.username });
};
