const Sequelize = require('sequelize');

const User = (sequelize) => {
  const User = sequelize.define('user', {
      name: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      password: {type: Sequelize.STRING},
    }
  );

  User.sync({force: true}).then(() => {
    // Table created
    // return User.create({
    //   firstName: 'John',
    //   lastName: 'Hancock'
    // });
    return User.create({
      name: "Phạm Như Vũ",
      email: "phamnhuvu.ou@gmail.com",
      password: "123456789"
    });
  });

  return User;
};

module.exports = User;