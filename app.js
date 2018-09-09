'use strict'

const path = require('path');
const express = require('express'); //express is framework we are using
const hbs = require('hbs');

const app = express();

// -- fake database

const campuses = [{
  name: 'Amsterdam',
  address: 'adress2',
  status: 'latest'
}, {
  name: 'Paris',
  address: 'adress3',
  status: 'current'
}, {
  name: 'Barcelona',
  address: 'adress4',
  status: 'current'
},{
  name: 'Lisboa',
  address: 'adress4',
  status: 'upcoming'
}]

//configure app to find my hbs templates

// -- configure app

app.set('views', path.join(__dirname, '/views')); //app configures views option
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));


// --routes


app.get('/', (req, res) => {
  const data = {
    latestCampus: campuses[0],
    allCampuses: campuses,
    upcomingCampus: campuses[3]
  };
  res.render('index', data); 
});

app.get('/', (req, res) => {
  const data = {
    latestCampus: campuses[0],
    allCampuses: campuses
  };
  res.render('index', data); //res.render method of the response object, finds hbs file
});


app.get('/', (req, res) => {
  const data = {
    latestCampus: {    //pass objects
      name: 'Amsterdam',
      address: 'Your addres'
    }
  }
  res.render('index', data); //res.render method of the response object, finds hbs file
});


app.get('/about', (req, res) => {
  res.render('about'); 
});

app.get('/about', (req, res) => {
  res.render('/about/index'); 
});


app.get('/about/contact', (req, res) => {
  res.render('/about/contact'); 
});

app.listen(3000, () => console.log('listening on port 3000!!!'))

//npm install express hbs

