const Sequelize = require("sequelize");

const User = (sequelize) =>
  sequelize.define("message", {
      name: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING, unique: true},
      password: {type: Sequelize.STRING},
      description: {type: Sequelize.STRING}
    },
    {underscored: true}
  );

module.exports = User;