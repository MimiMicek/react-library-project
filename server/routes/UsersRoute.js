const router = require('express').Router();
const User = require('../models/User');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

router.use(cors());

process.env.SECRET_KEY = "secret";

router.get('/users', async (req, res) => {
    const users = await User.query()/* .column('first_name') */.select().eager("books");
    res.json(users);
});

router.post('/users/login', async(req, res) => {
    // todo get username and get from mysql
    const users = await User.query().select().where({ username: req.body.username }).limit(1);
    const user = users[0];
 
    if (user) {
        
        bcrypt.compare(req.body.password, user.password, (error, response) => {

            if (error) {
                res.status(500).json({ response: "Problem hashing the password" });
                return;
            }

            if (response === true) {
                res.status(200).json({"response": "Nice"});

                let token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
                    expiresIn: 1440
                });
    
                res.send(token);

                return;

            } else {
                res.status(400).json({"response": "User missing"});                
            }
    
        });

    } else {
        res.status(401).json({"response": "User missing"});
    }
});

router.post('/users/signup', (req, res) => {

    // todo validate the input
    if (req.body.username && req.body.password) {

        bcrypt.hash(req.body.password, saltRounds, async (error, hash) => {
            if (error) {
                res.status(500).json({ response: "Problem hashing the password" });
            }

            const newUser = { ...req.body, password: hash };

            const { username } = await User.query().insert(newUser);

            res.status(200).send({ });
        });
        
    } else {
        res.status(400).json({ response: "Missing password" });
    }
});

router.put('/users', async (req, res) => {
    res.send();
})

router.delete('/users', async (req, res) => {
    res.send();
})

module.exports = router;