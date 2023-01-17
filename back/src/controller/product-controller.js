'use strict'

// var USERS = [
//     { 'id': 1, 'productname': 'amandaq', 'password': '123456'},
//     { 'id': 2, 'productname': 'luisaf', 'password': '654321'}
// ];

// function getProducts() {
//     return USERS;
// };

const repository = require('../repository/product-repository');

exports.getAllProducts = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getProducts());
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.addProduct = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getProducts());
    try {
        let dbReturnProduct = await repository.create(req.body);
        res.status(200).send(dbReturnProduct);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.editProduct = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getProducts());
    try {
        let result = await repository.update(req.params.id ,req.body);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.deleteProduct = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getProducts());
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Product deleted!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};
