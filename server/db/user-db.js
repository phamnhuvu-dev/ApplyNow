const Sequelize = require('sequelize');

const User = (sequelize) => {
  const User = sequelize.define('user', {
      name: {type: Sequelize.STRING, unique: true},
      email: {type: Sequelize.STRING},
      password: {type: Sequelize.STRING},
      description: {type: Sequelize.STRING}
    }
  );

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
      name: "Đỗ Thị Thu Hằng",
      email: "dothithuhang@gmail.com",
      password: "123456789"
    });
  });

  User.sync({force: true}).then(() => {
    return User.create({
      name: "Nguyễn Quang Quí",
      email: "nguyenquangqui.ou@gmail.com",
      password: "123456789"
    });
  });
  return User;
};

module.exports = User;