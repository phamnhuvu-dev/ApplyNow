const user_api = require("./routes/api/user-api");

const route = (server, router) => {
  const sequelize = require('./db/sqlite');
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  const User = require('./db/user-db')(sequelize);

  server.use('/api/user', user_api(router, User))
};

module.exports = route;