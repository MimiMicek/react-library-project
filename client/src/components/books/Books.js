import React from 'react';
import BookForm from './BookForm';


export default class Books extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        title: [],
        author: "",
        text: "",
        published: "",
        link: ""
      };
    }

  getBook = async(e) => {

    e.preventDefault();
  
    const title = e.target.elements.title.value;
   
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
  
    const data = await api_call.json();

    for (var i = 0; i < data.items.length; i++) {
      var item = data.items[i].volumeInfo;
    }

    console.log(item)
  
    if(title){
      this.setState({
        title: item.title,
        author: item.authors,
        text: item.description,
        published: item.publishedDate,
        link: item.infoLink
      });
      
      } else{
        this.setState({
          title: "",
          author: "",
          text: "",
          published: "",
          link: ""
        });
      }
    }
    
  render(){

    const { title, author, text, published, link } = this.state;

    return(
      <div className="wrapper">
        <div className="col">
          <BookForm getBook={this.getBook} />
        </div>
        
         <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author/s</th>
                <th scope="col">Description</th>
                <th scope="col">Date published</th>
                <th scope="col">Link to book</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ title }</td>
                <td>{ author }</td>
                <td>{ text }</td>
                <td>{ published }</td>
                <td><a href={ link }>Link to the book</a></td>
              </tr>
            </tbody>
          </table>
         
        </div>
    );
  }
}


