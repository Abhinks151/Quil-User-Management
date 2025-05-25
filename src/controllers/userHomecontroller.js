import { fetchProducts } from "../services/productServices.js";

const userHomeController = async (req, res) => {
  // res.render('home' ,{})
  // res.send(`Welcome, ${req.session.user.username}`);
  try {
    const products = await fetchProducts();
    if (!req.session.user) {
      return res.redirect('/user/login');
    }
    return res.status(200).render('home', {
      user: req.session.user.username,
      products
    });

  } catch (error) {
    console.error('Error loading products:', error.message);
    // res.status(500).send('Internal Server Error');
  }
};

export default userHomeController;

