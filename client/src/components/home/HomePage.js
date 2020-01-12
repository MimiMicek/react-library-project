import React from 'react';
import library from './library.jpg';
import './HomePage.css';

export default class HomePage extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome to online library</h1>
            <img alt="library" className="img-fluid" src={library}></img>
          </div>
        </div>
      </div>
    );
  }
}


