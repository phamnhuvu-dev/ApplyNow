const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const compression = require('compression');
const next = require('next');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    const router = express.Router();

    server.use(compression({ level: 9, threshold: 0 }));
    server.use(logger('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(express.static(path.join(__dirname, 'public')));

    const route = require('./route');
    route(server, router);

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
