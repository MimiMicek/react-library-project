import axios from 'axios';

export const signup = async newUser => {

  const response = await axios

    .post('http://localhost:8080/users/signup', {

      firstName: newUser.firstName,
      lastName: newUser.lastName,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password

    });

  console.log('User is signed up');
};


export const login = async existingUser => {

  try {

    const response = await axios

      .post('http://localhost:8080/users/login', {

        username: existingUser.username,
        password: existingUser.password

      });

    console.log('User is logged in');

    let firstResponse;

    localStorage.setItem('usertoken', firstResponse.data);

    return firstResponse.data;
  }

  catch (err) {
    console.log(err);
  }
};
