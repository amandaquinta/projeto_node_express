'use strict'

const mongoose = require('mongoose');
require('../models/product')
const Product = mongoose.model('Product');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await Product.find({status:true});
};

exports.create = async(data) => {
    let product = new Product(data);
    return await product.save();
};

exports.update = async(id, data) => {
    console.log(data, 'update');
    let productUpdated = await Product.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status,
        }
    });
    return await productUpdated;
};

exports.delete = async(id, data) => {
    return await Product.findOneAndDelete({_id:id});
};

exports.deleteLogic = async(id, data) => {
    console.log(data, 'deleteLogic');
    return await await Product.findByIdAndUpdate(id, {
        $set: {
            status: false,
        }
    });
};