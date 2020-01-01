import axios from 'axios';

export const saveBook = async newBook => {

  const response = await axios

    .post('http://localhost:8080/books/new-book', {

      title: newBook.title,
      text: newBook.text
    });

  console.log('The book has been saved');
};
