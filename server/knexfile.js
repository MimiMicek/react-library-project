const credentials = require('./mysql_config/credentials')
const knexSnakeCaseMappers = require('objection').knexSnakeCaseMappers;

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password
    },
    
    ...knexSnakeCaseMappers()
  }
};
