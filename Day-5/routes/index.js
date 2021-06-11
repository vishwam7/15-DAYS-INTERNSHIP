var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect(function(err) {
    if (!err)
        console.log("DB Connected");
    else
        console.log("connection failed!");
});

/* Website Routings */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Noob World' });

});

router.get('/features', function(req, res, next) {
    res.render('features');

});

router.get('/activities', function(req, res, next) {
    res.render('activities');

});

router.get('/company', function(req, res, next) {
    res.render('company');

});

router.get('/contact', function(req, res, next) {
    res.render('contact');

});

router.get('/login', function(req, res, next) {
    res.render('login');

});

//Table Fetch Route
router.get('/table', function(req, res, next) {
    connection.query("select * from employee ", function(err, db_rows) {
        if (err) throw err;
        res.render('table', { db_rows_array: db_rows });
    });

});

//Delete Route
router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query("delete from employee where ID = ? ", [id], function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.redirect('/table');
    });
});

//Edit Route
router.get('/editForm/:id', function(req, res, next) {
    //... Do something with req.user
    var editId = req.params.id;
    connection.query("select * from employee where ID = ? ", [editId], function(err, db_rows) {
        if (err) throw err;
        res.render('editForm', { db_rows_array: db_rows })
    });
});

router.post('/edit-form/:id', function(req, res, next) {
    var editId = req.params.id;
    var ID = req.body.ID;
    var Name = req.body.Name;
    var Salary = req.body.Salary;
    var Country = req.body.Country;
    var City = req.body.City;
    connection.query("update employee set ID=?,Name=?,Salary=?,Country=?,City=? where ID=?", [ID, Name, Salary, Country, City, editId], function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.redirect('/table');
    });
});

//Adding New Entries Route
router.get('/addForm', function(req, res, next) {
    res.render('addForm')
});

router.post('/add-form', function(req, res, next) {
    var editId = req.params.id;
    var ID = req.body.ID;
    var Name = req.body.Name;
    var Salary = req.body.Salary;
    var Country = req.body.Country;
    var City = req.body.City;
    connection.query("insert into employee set ID=?,Name=?,Salary=?,Country=?,City=?", [ID, Name, Salary, Country, City, editId], function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.redirect('/table');
    });
});

module.exports = router;