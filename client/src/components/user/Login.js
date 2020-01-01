import React from 'react';
import { login } from './UserAuth';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [ e.target.name ]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const existingUser = {

          userName: this.state.userName,
          password: this.state.password

        };
    
        login(existingUser).then(res => {
          if (res) {
            this.props.history.push(`/`);
          }
        });
      }
    
      render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>

                  <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>

                  <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                      type="userName"
                      className="form-control"
                      name="userName"
                      placeholder="Enter username"
                      value={this.state.userName}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-info btn-block"
                  >
                    Log in
                  </button>

                </form>
              </div>
            </div>
          </div>
        )
      }
}