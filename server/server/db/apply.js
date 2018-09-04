const Sequelize = require("sequelize");

const Apply = (sequelize) =>
  sequelize.define("apply", {
      user_id: {type: Sequelize.INTEGER},
      post_id: {type: Sequelize.INTEGER},
      status: {type: Sequelize.INTEGER},
    },
    {underscored: true}
  );

module.exports = Apply;