const Product = require('../models/Product')
const User = require('../models/User')

exports.addProductToCart = async (req, res) => { 
    const userId = req.user.id;
    const { id } = req.params;
    const user = await User.findById(userId);
    const originalProduct = await Product.findById(id);

    const product = user.cart?.find(p => p.product.toString() === id);
    if (product === undefined) {
        await User.findByIdAndUpdate(userId, { $push : { cart: {product: id} } }, {new: true});
        return res.status(201).json({message: "Product added"});
    } else {
        const newCart = user.cart.map(p => {
            if (p.product.toString() === id && p.qty < originalProduct.qty) {
                p.qty += 1;
                return p;
            };
            return p;
        });
        await User.findByIdAndUpdate(userId, { cart: newCart }, {new: true});
        return res.status(201).json({message: "Product added"});
    };
};

exports.changeProductQty = async (req, res) => { 
    const userId = req.user.id;
    const { id, qty } = req.params;
    const user = await User.findById(userId);

    const newCart = user.cart.map(p => {
        if (p.product._id.toString() === id) {
            p.qty = qty;
            return p;
        };
        return p;
    });
    await User.findByIdAndUpdate(userId, { cart: newCart }, {new: true});
    return res.status(200).json({message: "Product edited"});
};

exports.removeProductFromCart = async (req, res) => { 
    const userId = req.user.id;
    const { id } = req.params;
    await User.findByIdAndUpdate(userId, { $pull : { cart: {_id: id} } }, {new: true});
    res.status(201).json({message: "Product removed"});
};

exports.getMyCart = async (req, res) => { 
    const userId = req.user.id;
    const {cart} = await User.findById(userId).populate('cart.product');
    res.status(200).json(cart);
};
