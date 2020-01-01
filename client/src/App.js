import React from 'react';
import './App.css';
import HomePage from './components/home/HomePage';
import Books from './components/books/Books';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Header from './components/navigation/Header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

export default class App extends React.Component{

  state = {
    data: null
  };

componentDidMount() {
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}

callBackendAPI = async () => {
  const response = await fetch("/backend");
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message); 
  }
  return body;
};


  render(){
     return (
      <Router>
          { console.log(this.state.data) }
        <Header/>
        <main>
          <Switch>
            <Route path="/" exact>
            <HomePage/>
            </Route>
            <Route path="/books" exact>
              <Books/>
            </Route>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/signup" exact>
              <Signup/>
            </Route>
            <Redirect to="/"/>     
          </Switch> 
        </main>
      </Router>
    );
  }
}
