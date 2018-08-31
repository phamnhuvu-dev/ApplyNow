const Sequelize = require('sequelize');

const Post = (sequelize) => {
  const Post = sequelize.define('post', {
      user_id: {type: Sequelize.INTEGER},
      title: {type: Sequelize.STRING},
      content: {type: Sequelize.TEXT},
    },
    {underscored: true}
  );



  return Post;
};

module.exports = Post;