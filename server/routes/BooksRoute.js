'use strict';
const router = require('express').Router();
const Email = require('../models/Email');
const cors = require('cors');
const nodemailer = require('nodemailer');


router.use(cors());

router.get('/emails', async (req, res) => {
    const emails = await Email.query().select();
    res.json(emails);
    console.log('Getting all emails');
});

router.post('/emails/send-email', async (req, res) => {
    console.log('Send email');
    console.log(req.body);
    if(req.body.subject && req.body.html){
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'myemail@gmail.com',
                pass: 'password'
            }
        });

        const mailOptions = {
            from: 'myemail@gmail.com',
            to: req.body.to,
            subject: req.body.subject,
            html: req.body.html
        };

        const email = await Email.query().insert(mailOptions);

        res.status(200).json({ resMessage: email });

        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err);
            else
                console.log(info);
        });
    } else {
        res.status(400).json({ resMessage: "something is missing" });
    }
});
module.exports = router;