const express = require('express');
const router = express.Router();
const Category = require('./CategoryModel');
const { default: slugify } = require('slugify');

router.get('/admin/categories/new', (req, res) => {
  res.render('admin/categories/new');
});

router.post('/admin/categories/save', (req, res) => {
  let title = req.body.title;
  if(title != undefined){
    Category.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect('/admin/categories/new');
    });
  }
});

module.exports = router;