const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization === 'Bearer adascdgdfbvcbwereqwsdasd'

    if(!authorization) {
        return res.status(401).send({ error: 'You must be logged in.' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'here_is_my_key', async (err, payload) => {
        try {
            if (err) {
                return res.status(401).send({ error: 'You must be loggined'})
            }
            const { userId } = payload;
            
            const user = await User.findById(userId);
            req.user = user;
            next(); 
        } catch (err) {
            return console.log(err);
        }   
    })    
}
