'use strict'

var USERS = [
    { 'id': 1, 'username': 'amandaq', 'password': '123456'},
    { 'id': 2, 'username': 'luisaf', 'password': '654321'}
];

function getUsers() {
    return USERS;
};

exports.get = async(req, res, next) => {
    console.log('Entrou no nosso controller');
    res.send(getUsers());
}