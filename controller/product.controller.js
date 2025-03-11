const Product = require("../models/product.model");

const getProducts = async (req,res) => { 
    try{
        const products = await Product.find({});
        res.status(200).json(products);
        if(!products || products.length === 0)
        {
            return res.status(404).json({ ErrorMessage : "No Product Was Not Found" });
        } 
    }
    catch(error){ 
        res.status(500).json({ ErrorMessage : error.message });
    }
}

const getProductById = async (req,res) => { 
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product)
        {
            return res.status(404).json({ ErrorMessage : "Product Was Not Found" });
        } 
        res.status(200).json(product);
    }
    catch(error){ 
        res.status(500).json({ ErrorMessage : error.message });
    }
}

const CreateProduct = async (req,res) => { 
    try{
        const newInstance = await Product.create(req.body);
        res.status(200).json(newInstance);
    }
    catch(error){ 
        res.status(500).json({ ErrorMessage : error.message });
    }
}

const UpdateProduct = async (req,res) => { 
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product)
        {
            res.status(404).json({ ErrorMessage : "Product Was Not Found" });
        }
        const productAfterUpdate = await Product.findById(id);
        res.status(200).json(productAfterUpdate);
    }
    catch(error){ 
        res.status(500).json({ ErrorMessage : error.message });
    }
}

const DeleteProduct = async (req,res) => { 
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            res.status(404).json({ ErrorMessage : "Product Was Not Found" });
        }  
        res.status(200).json({ Message : "Deleted Successfully" });
    }
    catch(error){ 
        res.status(500).json({ ErrorMessage : error.message });
    }
}

module.exports = {getProducts, getProductById, CreateProduct, UpdateProduct, DeleteProduct};