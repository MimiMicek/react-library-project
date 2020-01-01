import React from 'react';
import { signup } from './UserAuth';

export default class Signup extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          firstName: "",
          lastName: "",
          userName: "",
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
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password
        };
    
        signup(newUser).then(res => {
          this.props.history.push(`/login`);
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
                <label htmlFor="firstName">First name</label>
                <input
                  type="firstName"
                  className="form-control"
                  name="firstName"
                  placeholder="Write your first name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="lastName"
                  className="form-control"
                  name="lastName"
                  placeholder="Write your last name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                  type="userName"
                  className="form-control"
                  name="userName"
                  placeholder="Choose a user name"
                  value={this.state.userName}
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

              <button
                type="submit"
                className="btn btn-lg btn-info btn-block"
              >
                Signup
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}