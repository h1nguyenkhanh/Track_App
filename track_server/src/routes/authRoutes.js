const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Product = mongoose.model('Product');


const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = new User({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'here_is_my_key');
        res.send({ token })
        
    } catch (err) {
        return res.status(422).send(err.message)
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    
    if(!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password' });
    }

    const user = await User.findOne({ email });
    if(!user) {
        return res.status(404).send({ error: 'Email not found' });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'here_is_my_key');
        res.send({ token });

    } catch (err) {
        return res.status(422).send({ error: 'Invalid password or email' });
    }
});

router.post('/product', async (req, res) => {
    const product = new Product({ title: "product 1", price: 1000 });
    await product.save();

    res.send('sign up route Product');
});

module.exports = router;