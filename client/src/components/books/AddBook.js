import React from 'react';
import { saveBook } from './SaveBook';
import history from '../../history';
export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: "",
            text: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [ e.target.name ]: e.target.value });
    }

    onSubmit(e){

        e.preventDefault();

        const newBook = {
            title: this.state.title,
            author: this.state.author,
            text: this.state.text
          };
      
          saveBook(newBook).then(res => {
            history.push(`/books`);
          });
    }
        
    render(){
      
       return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Add a new book</h1>
  
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="title"
                    className="form-control"
                    name="title"
                    placeholder="Insert title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                    type="author"
                    className="form-control"
                    name="author"
                    placeholder="Insert author"
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="text">Text</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="text"
                    placeholder="Insert text"
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                </div>
  
                <button
                  type="submit"
                  className="btn btn-lg btn-info btn-block"
                >
                  Save
                </button>

              </form>
            </div>
          </div>
        </div>
      );
    }
}
