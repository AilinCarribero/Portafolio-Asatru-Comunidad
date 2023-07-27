const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');

//inicializacion
const app = express();
require('./database');
require('./passport/local-auth');

//configuraciones
app.set('port' , process.env.PORT || 3000);
app.set('views' , path.join(__dirname , 'views'));
app.engine('ejs' , engine);
app.set('view engine' , 'ejs');

//funciones de rutas
app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use((req , res , next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.usuario = req.user;
    //console.log(app.locals)
    next();
});

//rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//inicializacion del servidor

app.listen(app.get('port'), () => {
    console.log(`Server port ${app.get('port')}`);
});

