const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});
const upload = multer({storage: storage});

const upload_api = (router) => {

  router.post("/avatar", upload.single("avatar"), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  });

  return router;
};

module.exports = upload_api;