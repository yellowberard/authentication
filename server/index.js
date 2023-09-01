const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./model/user.model')
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/full-mern-test');

app.post('/api/register', async (req, res) => {

    console.log(req.body);
    try {
        await User.Create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({
            status: 'ok'
        })
    } catch (err) {
        console.log(err);
        res.json({
            status: 'error',
            error: "Duplicate email"
        })
    }
    res.json({
        status: 'okk'
    });

})

app.post('/api/login', async (req, res) => {

    console.log(req.body);
    // const user = await User.collection.findOne({
    //     //     email: req.body.email,
    //     //     password: req.body.password
    //     // })
    //     // if (user) {
    //     //     return res.json({
    //     //         status: 'ok',
    //     //         user: true
    //     //     })
    //     // } else {
    //     //     return res.json({
    //     //         status: 'error',
    //     //         user: false
    //     //     })
    //     // }

})

app.listen(6969, () => {
    console.log('Server is started on 6969')
})