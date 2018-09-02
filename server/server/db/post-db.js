const Sequelize = require("sequelize");

const Post = (sequelize) =>
  sequelize.define("post", {
      user_id: {type: Sequelize.INTEGER},
      title: {type: Sequelize.STRING},
      content: {type: Sequelize.TEXT},
    },
    {underscored: true}
  );

module.exports = Post;