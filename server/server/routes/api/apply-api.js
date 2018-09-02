const apply_api = (router, Apply, Post, User) => {

  router.post("/get", (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    Apply.findAll({
      include: [{
        model: Post,
        include: [{
          model: User
        }]
      }]
    }).then(posts => {
      res.send(posts);
    }).catch(e => {
      res.send({error: e});
    });
  });

  return router;
};

module.exports = apply_api;