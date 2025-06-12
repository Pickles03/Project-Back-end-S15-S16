const upload = require('../middlewares/uploadMiddleware');
const express = require('express');
const router = express.Router();
const {
    showProducts,
    showProductById,
    showNewProduct,
    createProduct,
    showEditProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const requireAuth = require('../middlewares/authMiddleware');

router.get('/login', (req, res) => {
    const error = req.query.error ?  '<p style="color: red;">Invalid login</p>' : '';
    res.send(`
        <h2>Login</h2>
        ${error}
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(
        username === 'admin' && 
        password === process.env.ADMIN_PASSWORD
    ) {
        req.session.loggedIn = true;
        res.redirect('/dashboard');
    } else {
        res.redirect('/login?error=true');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

router.get('/products', showProducts);
router.get('/products/:productId', showProductById);

router.get('/dashboard', requireAuth, showProducts);
router.get('/dashboard/new', requireAuth, showNewProduct);
router.post('/dashboard', requireAuth, upload.array('images', 5), createProduct);
router.get('/dashboard/:productId', requireAuth, showProductById);
router.get('/dashboard/:productId/edit', requireAuth, showEditProduct);
router.put('/dashboard/:productId', requireAuth, updateProduct);
router.delete('/dashboard/:productId/delete', requireAuth, deleteProduct);


module.exports = router;