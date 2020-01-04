'use strict';
const router = require('express').Router();
const Book = require('../models/Book');

router.get('/books', async (req, res) => {
    const books = await Book.query().select();
    res.json(books);
    console.log('Getting all books');
});

router.post('/books/add-book', async (req, res) => {

    if (req.body.title && req.body.text) {

        const newBook = { ...req.body };

        const { title } = await Book.query().insert(newBook);

            res.status(200).send(console.log("Book successfully saved in the db"));
        
    } else {
        res.status(400).json({ response: "Something is missing" });
    }
});

module.exports = router;