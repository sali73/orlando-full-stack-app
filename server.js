//___________________
//Dependencies
//___________________
const express = require('express');
const app = express ();
const mongoose = require ('mongoose');
const Tour = require('./models/tour.js');
const db = mongoose.connection;
const methodOverride  = require('method-override');
const show = console.log
const tourController =require('./controllers/tour.js')
const userController = require('./controllers/users_controller.js')
const session = require('express-session')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')


//___________________
//Middleware
//___________________
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
require('dotenv').config()
const port = process.env.PORT||3000
app.use(
    session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false 
    })
  )
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//___________________
//Controllers 
//___________________
app.use('/tour' , tourController)
app.use('/user', userController)

//___________________
//Mongoose Connection
//___________________

// mongodb+srv://salimohamed:Sa101209ah@@cluster0.fxyjz.mongodb.net/Tour?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open' , ()=>{});

//____________________
//Authorization Routes
//___________________
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }

//____________
//LOGIN PAGE
//_____________
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', { currentUser: req.session.currentUser })
  })
app.post('/sessions/', (req, res) => {
  console.log(req.body)
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      res.send('oops the db had a problem')
    } else if (!foundUser) {
      res.redirect('/user/new')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/tour/')
      } else {
        res.send('wrong password')
      }
    }
  })
})

app.delete('/sessions/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/tour')
  })
})

module.exports = session

//___________________
//Listener
//___________________
app.listen( process.env.PORT || 3000, () => {
    console.log('listening on: ' + port);
});