var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const next = require('next');
const sequelize = require('./db/sqlite');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const user_api = require("./routes/api/user-api");

app.prepare()
  .then(() => {
    const server = express();
    const router = express.Router();
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

    const User = require('./db/user-db')(sequelize);

    server.use(logger('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(express.static(path.join(__dirname, 'public')));

    // server.get('/a', (req, res) => {
    //   return app.render(req, res, '/b', req.query)
    // });
    //
    // server.get('/b', (req, res) => {
    //   return app.render(req, res, '/a', req.query)
    // });
    //
    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', { id: req.params.id })
    // });

    server.use('/api/user', user_api(router, User));

    server.get('*', (req, res) => {
      return handle(req, res)
    });



    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });

// // view engine setup
// server.set('views', path.join(__dirname, 'views'));
// server.set('view engine', 'pug');



// server.use('/', indexRouter);
// server.use('/users', usersRouter);

// // catch 404 and forward to error handler
// server.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// server.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = server;
