const Sequelize = require('sequelize');

const User = (sequelize) => {
  const User = sequelize.define('user', {
      name: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING, unique: true},
      password: {type: Sequelize.STRING},
      description: {type: Sequelize.STRING}
    },
    {underscored: true}
  );
  return User;
};

module.exports = User;