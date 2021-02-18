const express = require('express');
const router  = express.Router();
const { isAuth, catchErrs } = require('../middlewares')
const {
   addProductToCart,
   changeProductQty,
   removeProductFromCart,
   getMyCart
} = require('../controllers/cart')

router.get('/addtocart/:id', isAuth, catchErrs(addProductToCart))
router.get('/editqty/:id/:qty', isAuth, catchErrs(changeProductQty))
router.get('/remove/:id', isAuth, catchErrs(removeProductFromCart))
router.get('/get', isAuth, catchErrs(getMyCart))

module.exports = router;