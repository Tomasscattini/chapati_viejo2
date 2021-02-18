const express = require('express');
const router  = express.Router();
const { isAuth, catchErrs } = require('../middlewares')
const {
   addProductToCart,
   changeProductQty,
   removeProductFromCart,
   getMyCart
} = require('../controllers/cart')

router.get('/addtocart/:id', catchErrs(addProductToCart))
router.get('/editqty/:id/:qty', catchErrs(changeProductQty))
router.get('/removefromcart/:id', catchErrs(removeProductFromCart))
router.get('/getmycart', catchErrs(getMyCart))

module.exports = router;