'use strict'

// var USERS = [
//     { 'id': 1, 'username': 'amandaq', 'password': '123456'},
//     { 'id': 2, 'username': 'luisaf', 'password': '654321'}
// ];

// function getUsers() {
//     return USERS;
// };

const repository = require('../repository/user-repository');

exports.getAllUsers = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getUsers());
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.addUser = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getUsers());
    try {
        let dbReturnUser = await repository.create(req.body);
        res.status(200).send(dbReturnUser);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.editUser = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getUsers());
    try {
        let result = await repository.update(req.params.id ,req.body);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.deleteUser = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getUsers());
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'User deleted!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};
