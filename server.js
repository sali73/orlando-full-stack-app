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

//controllers 
app.use('/tour' , tourController)
//___________________
// Routes
//___________________
app.get('/' , (req, res) => {
  res.send('<a href="/tour"> continue </a>');
});


// ROUTE Gallery
app.get('/tour/gallery', (req, res)=>{
    res.render('Gallery');
});

//ROUTE About
app.get('/tour/about', (req, res)=>{
    res.render('About');
});

//ROUTE NEWwwwwww
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

// // seed
// app.get('/tour/seed', (req, res) => {
//     Tour.create([
//         {
//             name: 'Universal Orlando Resort',
//             location: 'Universal Blvd, Orlando, FL 32819',
//             img:'https://www.travelingmom.com/wp-content/uploads/2019/04/Universal-Ball-800x450.jpg',
//             rate: 4.7,
//             price:233,
//             size:'35000 sq ft',
//         },
//         {
//             name: 'Walt Disney World Resort',
//             location: 'Orlando, FL ',
//             img:'https://img.budgettravel.com/_ampArticle/Disney-World-Seven-Dwarfs.jpg?mtime=20181003120725',
//             rate:4.7,
//             price:180,
//             size:'11sq',
//         },
//         {
//             name: 'Magic kingdom Park',
//             location: ' Lake Buena Vista, FL 32836',
//             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQeethLLiBQCEAtdxgr6BtcazWf72CiSHPZvSzeJFy928COrQn&usqp=CAU',
//             rate:4.7,
//             price:300,
//             size:'98900 sq ft',
//         },
//         {
//             name: 'Epcot',
//             location: '200 Epcot Center Dr, Orlando, FL 32821',
//             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnW9vQ9SBNl9hVis4FbUmsb0fu22DpcaV0WO8zZe7-uPpHSBOv&usqp=CAU',
//             rate:4.7,
//             price:170,
//             size:'396400 sq ft',
//         },
//            {
//             name: 'SeaWorld Orlando',
//             location: ' 7007 Sea World Dr, Orlando, FL 32821',
//             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX5Zdy50Rd3dARDWPj7EAjaI5Rt6K-TTf32KUBFy9CUW_dHG4I&usqp=CAU',
//             rate:4.6,
//             price:100,
//             size:'95090 sq ft',
//         },
//            {
//             name: "Universal's Islands Of adventure",
//             location: 'Universal Blvd, Orlando, FL 32819',
//             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgoAQ6M-jntbY71xHxBYonx9YAKK4laOgHQE6CRhGA7cMHJZ_w&usqp=CAU',
//             rate:4.8,
//             price:350,
//             size:'35000 sq ft',
//         },
//            {
//             name: "Disney's Hellywood Studio",
//             location: '351 S Studio Dr, Lake Buena Vista, FL 32830',
//             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrSUt6_554sR0C4Zskr30oCXZBA2z_LC3IaMmkonaV4XWDjpb6&usqp=CAU',
//             rate:4.8,
//             price:290,
//             size:'113500 sq ft',
//         },
//            {
//             name: "Disney's Animal Kingdom Theme Park",
//             location: ' 2901 Osceola Pkwy, Orlando, FL 32830',
//             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIrdO6xEx1vW0Rw8VE2iNsLT1cr0gZUadK0LmvmzTO-bhOF57l&usqp=CAU',
//             rate:4.7,
//             price:450,
//             size:'35000 sq ft',
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



//ROUTE EDIT
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