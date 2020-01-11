import React from 'react';

export default class MyBooks extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        books: []
      };
    }

  componentDidMount() {
    fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then(books => this.setState({ books }));
  }

  render(){
    const { books } = this.state;
    
    return(
        <div className="wrapper">
        <div className="col">
          <h1>List of my Books</h1>
        </div>
        
         <table className="table">
            <thead className="table-primary">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author/s</th>
                <th scope="col">Text</th>
              </tr>
            </thead>
            <tbody>
              { 
                books.map((book, index) => {
                  return (
                      <tr key={"bookrow" + index}>
                        <td>{ book.title }</td>
                        <td>{ book.author }</td>
                        <td>{ book.text }</td>
                      </tr>
                  )
              })}
            </tbody>
          </table>
         
        </div>

    );
  }
}


