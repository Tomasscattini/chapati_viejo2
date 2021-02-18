const express = require('express');
const router  = express.Router();
const { isAuth, catchErrs, checkRole } = require('../middlewares')
const {
   createProduct,
   editProduct,
   getAllProducts,
   getOneProduct,
   delteProduct
} = require('../controllers/products')

router.post('/create', isAuth, checkRole("admin"), catchErrs(createProduct))
router.post('/edit/:id', isAuth, checkRole("admin"), catchErrs(editProduct))
router.get('/getall', catchErrs(getAllProducts))
router.get('/get/:id', catchErrs(getOneProduct))
router.get('/delete/:id', isAuth, checkRole("admin"), catchErrs(delteProduct))

module.exports = router;