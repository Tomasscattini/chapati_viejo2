const Product = require('../models/Product')
const User = require('../models/Product');

exports.createProduct = async (req, res) => {
        const { image, name, description, price } = req.body;
        const newProduct = await Product.create({ image, name, description, price });
        res.status(201).json(newProduct);
};

exports.editProduct = async (req, res) => {
        const id = req.params.id;
        const { image, name, description, price } = req.body;
        const editedProduct = await Product.findByIdAndUpdate(id, { image, name, description, price });
        editedProduct ? res.status(202).json(editedProduct) :
        res.status(204).json({message: 'No such product on database'});
};

exports.getAllProducts = async (req, res) => {
        const products = await Product.find();
        products ? res.status(200).json(products) : 
        res.status(204).json({message: 'No products on database'});
};


exports.getOneProduct = async (req, res) => {
        const id = req.params.id;
        const product = await Product.findById(id);
        product ? res.status(200).json(product) : 
        res.status(204).json({message: 'No such product on database'});
};

exports.delteProduct = async (req, res) => {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);
        deletedProduct ? res.status(204).json({'message': `Product ${id} deleted`}) :
        res.status(204).json({message: 'No such product on database'});
};