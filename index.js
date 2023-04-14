const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongodb = require('./databases/md.databases')
const catedrasRouter = require('./routes/routes');
mongodb.connectMongoDB()
    .then(() => {
        console.log("conexion correcta");
    }).catch((err) => {
        console.error("conexion fallida");
    });
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/catedras', catedrasRouter);

// starting the server
app.listen(app.set('port'), ()=> {
    console.log(`server on port ${app.get('port')}`);
})


module.exports = app;
