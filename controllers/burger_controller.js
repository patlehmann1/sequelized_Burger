const express = require('express');
const router = express.Router();
const db = require("../models");




router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    db.burger.findAll({}).then(function (data) {
        const hbsObject = { burger: data };
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (newBurger) {
        res.json(newBurger);
        res.redirect('/');
    })
        .catch(function (err) {
            res.json(err);
        });
});

router.put('/burgers/update', function (req, res) {
    db.burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;