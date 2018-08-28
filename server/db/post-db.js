const Sequelize = require('sequelize');

const Post = (sequelize) => {
  const Post = sequelize.define('post', {
      user_id: {type: Sequelize.INTEGER},
      title: {type: Sequelize.STRING},
      content: {type: Sequelize.TEXT},
    }
  );

  Post.sync({force: true}).then(() => {
    return Post.create({
      user_id: 1,
      title: "Tuyển dụng anh hùng",
      content: "Cty Superman cần tuyển 3 anh hùng tham gia dự án bảo vệ thế giới"
    });
  });

  Post.sync({force: true}).then(() => {
    return Post.create({
      user_id: 2,
      title: "Tuyển dụng kẻ ác",
      content: "Cty Devil cần tuyển thêm 10 kẻ ác tham gia dự án phá hủy thế giới"
    });
  });

  return User;
};

module.exports = Post;