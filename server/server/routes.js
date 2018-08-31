const express = require('express');

const routes = (server, router) => {
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
  const user_api = require("./routes/api/user-api");
  server.use('/api/user', user_api(express.Router(), User));

  const Post = require('./db/post-db')(sequelize);
  const post_api = require("./routes/api/post-api");
  server.use('/api/post', post_api(express.Router(), User, Post));

  Post.belongsTo(User);
  User.hasMany(Post);


  User.sync({force: true}).then(() => {
    return User.create({
      name: "Phạm Như Vũ",
      email: "phamnhuvu.ou@gmail.com",
      password: "123456789",
      description: "Mobile developer"
    });
  });

  User.sync({force: true}).then(() => {
    return User.create({
      name: "Đỗ Thị Thu Hằng",
      email: "dothithuhang@gmail.com",
      password: "123456789",
      description: "QA/QC"
    });
  });

  User.sync({force: true}).then(() => {
    return User.create({
      name: "Trịnh Ngọc Tiến",
      email: "trinhngoctien@gmail.com",
      password: "123456789",
      description: "Web developer"
    });
  });

  User.sync({force: true}).then(() => {
    return User.create({
      name: "Nguyễn Quang Quí",
      email: "nguyenquangqui.ou@gmail.com",
      password: "123456789"
    });
  });

  Post.sync({force: true}).then(() => {
    return Post.create({
      title: "Tuyển dụng anh hùng",
      content: "Cty Superman cần tuyển 3 anh hùng tham gia dự án bảo vệ thế giới",
    }).then(post => {
      post.setUser(2);
    });
  });

  Post.sync({force: true}).then(() => {
    return Post.create({
      title: "Tuyển dụng kẻ ác",
      content: "Cty Devil cần tuyển thêm 10 kẻ ác tham gia dự án phá hủy thế giới",
    });
  }).then(post => {
    post.setUser(1);
  });
};

module.exports = routes;