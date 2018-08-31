const post_api = (router, User, Post) => {

  router.get("/all", (req, res) => {
    Post.findAll({
      limit: 10,
      attributes: ["id", "title", "content"],
      include: [{
        model: User,
        attributes: ["id", "name", "description"],
      }]
    }).then(posts => {
      res.send(posts);
    });
  });

  router.post("/create", (req, res) => {
    console.log(req.body);
    const user_id = req.body.user_id;
    const title = req.body.title;
    const content = req.body.content;
    Post.create({
      user_id: user_id,
      title: title,
      content: content,
    }).then(post => {
      post.setUser(user_id);
      res.send({
        create: "success"
      });
    }).catch((e) => {
      res.send({
        create: "fail",
        error: e.name,
      });
    });
  });

  router.post("/delete", (req, res) => {
    const id = req.body.id;
    Post.destroy({
      where: {
        id: id,
      },
      // truncate: true
    }).then(value => {
      console.log(value);
      res.send({
        delete: 'success'
      })
    });
  });

  router.post("/change_password", (req, res) => {
    res.send({
      change_password: "OK"
    });
  });

  return router;
};

module.exports = post_api;