const user_api = (router, User) => {

  router.get('/all', (req, res) => {
    User.findAll().then(users => {
      res.send(users);
    })
  });

  router.post('/login', (req, res) => {
    try {
      console.log(req.body);
      const email = req.body.email;
      const password = req.body.password;
      User.findOne({
        attributes: ['id', 'name', 'email'],
        where: {
          email: email,
          password: password
        }
      }).then(user => {
        let result;
        if (user === null) {
          result = {
            login: 'fail',
            error: 'not found'
          }
        } else {
          result = {
            login: 'success',
            id: user.id,
            name: user.name,
            email: user.email
          };
        }
        res.send(result);
      })
    } catch (e) {
      res.send({
        login: 'fail',
        error: e
      })
    }
  });

  router.post('/register', (req, res) => {
    res.send({
      register: 'OK'
    })
  });

  router.post('/change_password', (req, res) => {
    res.send({
      change_password: 'OK'
    })
  });

  return router;
};

module.exports = user_api;