const post_api = (router, Post) => {

  router.get('/all', (req, res) => {
    User.findAll().then(users => {
      res.send(users);
    })
  });

  router.post('/login', (req, res) => {
    res.send({
      login: 'OK'
    })
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

module.exports = post_api;