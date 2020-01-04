import axios from 'axios';

export const saveBook = newBook => {

  return axios

    .post('http://localhost:8080/books/add-book', {

      title: newBook.title,
      text: newBook.text
      
    })

    .then(response => {
      console.log('The book has been saved'); 
    });
  
};