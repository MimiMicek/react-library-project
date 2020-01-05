import React from 'react';

export default class BookForm extends React.Component{
   
    render(){
     
        return(
            <div className="container-fluid">
                <form onSubmit={this.props.getBook} className="form-group row m-3">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                        <label htmlFor="title">Title</label>
                        <input  className="form-control"
                                type="text" 
                                id="title"
                                name="title" 
                                placeholder="Enter title . . ."
                                />
                    </div>
                  {/*   <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
                        <label htmlFor="countryName">Country</label>
                        <input  className="form-control"
                                type="text"
                                id="countryName"
                                name="country" 
                                placeholder="Enter country . . ."
                                />
                    </div> */}
                    <div className="form-group col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <button className="btn btn-info btn-absolute-center">Search</button>
                    </div>
                </form>
            </div>       
        )
    }
}