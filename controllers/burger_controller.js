const express = require('express');
const router = express.Router();
const db = require("../models");




router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    db.burger.findAll({}).then(function (data) {
        const hbsObject = { burger_data: data };
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (newBurger) {
        res.json(newBurger);
    })
    res.redirect('/burgers');
});

router.put('/burgers/update/:id/:status', function (req, res) {

    db.burger.update({
        devoured: parseInt(req.params.status)
    }, {
            where: { id: req.params.id }
        }).then(function () {
            res.redirect('/burgers');
        });
});


module.exports = router;