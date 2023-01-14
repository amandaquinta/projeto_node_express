'use strict'

// var USERS = [
//     { 'id': 1, 'username': 'amandaq', 'password': '123456'},
//     { 'id': 2, 'username': 'luisaf', 'password': '654321'}
// ];

// function getUsers() {
//     return USERS;
// };

const repository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const md5 = require('md5');


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
        // let dbReturnUser = await repository.create(req.body);
        let user = await parserBodyUserCreate(req.body);
        user.password = md5(user.password + "63qZ56J6ZA9JIDqaDHPOfzVKyDksqEybc2MA7m9k");
        console.log(user)
        let dbReturnUser = await repository.create(user);
        res.status(200).send(dbReturnUser);
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

async function parserBodyUserCreate(body){
    return {
        name: body.name,
        email: body.email,
        password: body.password,
    }
}

exports.editUser = async(req, res, next) => {
    // console.log('Entrou no nosso controller');
    // res.send(getUsers());
    try {
        let result = await repository.update(req.body.id ,req.body);
        res.status(200).send(Object.assign(result, req.body));
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
        console.log("controller exports.deleteUser", req.body)
        await repository.delete(req.body.id);
        res.status(200).send({
            message: 'User deleted!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Oops! Something went wrong!', error: e,
        });
    }
};

exports.login = async(req, res, next ) => {
    try {
        let user = await repository.autenticate({
            email: req.body.email,
            password: md5(req.body.password +  "63qZ56J6ZA9JIDqaDHPOfzVKyDksqEybc2MA7m9k")
        });
        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }
        var token = jwt.sign({userID: user._id}, '8^1z7mJ<GL]eOSd<+?co%$', {expiresIn: '2h'});
        res.status(201).send({
            token: token
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição ' + e
        });
    }
}
