import React from 'react';
import { login } from './UserAuth';
import history from '../../history';
import Button from '@material-ui/core/Button';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
    
        const user = {

          username: this.state.username,
          password: this.state.password

        };
    
        login(user).then(res => {
          if (res) {
            history.push(`/`);
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
                    <label htmlFor="username">Username</label>
                    <input
                      type="username"
                      className="form-control"
                      name="username"
                      placeholder="Enter username"
                      value={this.state.username}
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

                  <Button
                    type="submit"
                    className="btn btn-lg btn-info btn-block"
                    variant="contained" 
                    color="primary"
                  >
                    Log in
                  </Button>

                </form>
              </div>
            </div>
          </div>
        )
      }
}