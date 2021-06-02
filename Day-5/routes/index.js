var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
    res.render('features', { title: 'Express' });
});

router.get('/activities', function(req, res, next) {
    res.render('activities', { title: 'Express' });
});

router.get('/company', function(req, res, next) {
    res.render('company', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

module.exports = router;