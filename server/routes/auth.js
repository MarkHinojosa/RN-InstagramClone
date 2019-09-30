const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    console.log(req.body.username)

    //check if users data already exists

    User.findOne({ 'username': req.body.username }, (err, data) => err ? res.send(err) :
        searchResults(data)
    );

    async function searchResults(data) {
        if (data == null) {
            //no match found
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            try {
                const savedUser = await user.save();
                res.send(savedUser);
            } catch (err) {
                res.status(400).send(err);
            }
        } else {
            //match has been found
            console.log(data);
            res.status(400).send('username already exists')
        }
    }
});

module.exports = router;