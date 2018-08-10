const orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;

host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: process.env.DB_NAME