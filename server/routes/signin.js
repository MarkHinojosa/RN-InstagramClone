const User = require('../models/User');

module.exports = (app) => {
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            username,
            password
        } = body;

        if (!username) {
            return send({
                success: false,
                message: 'Error: Username cannot be blank!'
            })
        }

        if (!password) {
            return send({
                success: false,
                message: 'Error: Password cannot be blank!'
            })
        };

        User.find({
            username: username
        }, (err, previousUsers) => {
            if (err) {
                return send({
                    success: false,
                    message: 'Error: '
                });
            } else if (previousUsers.length > 0) {
                return send('Error: Account already exists')
            }

            // Save the new user
            const newUser = new User();

            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return send({
                        success: false,
                        message: 'Error Server error'
                    })

                }
                return send({
                    success: true,
                    message: 'Signed up!'
                })
            })
        })

    })
}