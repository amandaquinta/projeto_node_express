const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var USERS = [
    { 'id': 1, 'username': 'amandaq', 'password': '123456'},
    { 'id': 2, 'username': 'luisaf', 'password': '654321'}
];

var HELLO = [ 
    {'msg': 'Hello Express'}
];

function getHello() {
    return HELLO;
};

function getUsers() {
    return USERS;
};

app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send(getHello());
})

const userRouter = require('./src/route/user-route');

app.use('/user', userRouter);

app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000')
});