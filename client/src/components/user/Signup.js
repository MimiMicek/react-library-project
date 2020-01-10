import React from 'react';
import { signup } from './UserAuth';
import history from '../../history';
import Button from '@material-ui/core/Button';
export default class Signup extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: ""
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
      this.setState({ [ e.target.name ]: e.target.value });
  }

  onSubmit(e){

      e.preventDefault();

      const newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        };
    
        signup(newUser).then(res => {
          history.push('/login');
        });
  }
        
  render(){
    
      return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Signup</h1>

              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="first_name"
                  className="form-control"
                  name="first_name"
                  placeholder="Write your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="last_name"
                  className="form-control"
                  name="last_name"
                  placeholder="Write your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  className="form-control"
                  name="username"
                  placeholder="Choose a user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Choose a password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <Button
                type="submit"
                className="btn btn-lg btn-info btn-block"
                variant="contained" 
                color="primary"
              >
                Signup
              </Button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}