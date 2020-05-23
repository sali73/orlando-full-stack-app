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


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open' , ()=>{});


//___________________
//Middleware
//___________________

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//___________________
// Routes
//___________________
// app.get('/' , (req, res) => {
//   res.send('<a href="/tour"> continue </a>');
// });


//ROUTE NEW
app.get('/tour/new', (req, res)=>{
    res.render('New');
});
app.post('/tour/', (req, res)=>{

    // res.send('received');
    Tour.create(req.body, (error, createdTour)=>{
        res.redirect('/tour');
    });
});

//ROUTE INDEX
app.get('/tour', (req, res) => {
    Tour.find({}, (error, allTour) => {
        res.render('Index', {
            tour: allTour,
            // username: req.session.currentUser,
        });
    });
});

// seed
// app.get('/tour/seed', (req, res) => {
//     Tour.create([
//         {
//             name: 'grapefruit',
//             location: 'pink',
//             img:'https://placehold.it/100x100.png',
//             rate:1111,
//             price:111,
//             size:'11sq',
//         },
//         {
//             name: 'gr',
//             location: 'pink',
//             img:'https://placehold.it/100x100.png',
//             rate:1111,
//             price:111,
//             size:'11sq',
//         },
//         {
//             name: 'grap',
//             location: 'pink',
//             img:'https://placehold.it/100x100.png',
//             rate:1111,
//             price:111,
//             size:'11sq',
//         },
        
       
//     ], (err, data) => {
//         res.redirect('/tour');
//     })
// });



//Route show 
app.get('/tour/:id',(req, res) => {
    Tour.findById(req.params.id, (error, foundTour) => {
        res.render('Show', {
            tour: foundTour,
        });
    });
});

//DELETE ROUTE
app.delete('/tour/:id',(req, res) => {
   Tour.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/tour');
    });
});



//EDIT
app.get('/tour/edit/:id',(req, res) => {
    Tour.findById(req.params.id, (error, foundTour) => {
        res.render('Edit',
         { tour: foundTour });
    });
});

app.put('/tour/edit/:id', (req, res) => {
    Tour.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/tour');
    });
});































//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening port:', PORT));