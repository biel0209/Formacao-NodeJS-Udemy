const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');  

// View engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


// Routes
app.use('/', categoriesController);
app.use('/', articlesController); 

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});