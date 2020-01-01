import React from 'react';
import './App.css';
import HomePage from './components/home/HomePage';
import Books from './components/books/Books';
import Header from './components/navigation/Header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route path="/" exact>
          <HomePage/>
          </Route>
          <Route path="/books" exact>
            <Books/>
          </Route>
          <Redirect to="/"/>     
        </Switch> 
      </main>
    
     
    </Router>
    );
  }
}

export default App;
