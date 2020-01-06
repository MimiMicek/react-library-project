import React from 'react';

export default class BookForm extends React.Component{
   
    render(){
     
        return(
            <div className="container-fluid">
                <form onSubmit={this.props.getBook} className="form-group row m-3">
                    <div className="col-md-6 mt-5 mx-auto">
                        <label htmlFor="title">Title</label>
                        <input  className="form-control"
                                type="text" 
                                id="title"
                                name="title" 
                                placeholder="Enter title . . ."
                                />
                                <br></br>
                                <button className="btn btn-info btn-absolute-center">Search</button>
                    </div>
                </form>
            </div>       
        )
    }
}