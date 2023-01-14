const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var { expressjwt: jwt } = require("express-jwt");
const cors = require('cors');
// var unless = require("express-unless");

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.use(
  jwt({
    secret: "8^1z7mJ<GL]eOSd<+?co%$",
    algorithms: ["HS256"],
  }).unless({ path: ['/auth', '/auth/login', '/product'] })
);

// app.get('/', function(req,res){
//     res.send(getHello());
// })

const authRouter = require('./src/route/auth-route');
app.use('/auth', authRouter);

const userRouter = require('./src/route/user-route');
app.use('/user', userRouter);

const productRouter = require('./src/route/product-route');
app.use('/product', productRouter);



app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000')
});

