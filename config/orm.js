const connection = require('./connection');
const cTable = require('console.table');
const mysql = require("mysql");

const orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.table(result);
        });
    },
    insertOne: function(value1, value2) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES('" + value1 + "', '" + value2 + "');";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.table(result);
        });
    },
    updateOne: function (table, colInput1, newData, colInput2, dataInput) {
        var queryString = 'UPDATE ' + table + ' SET ' + colInput1 + ' = "' + newData + '" WHERE ' + colInput2 + ' = ' + dataInput + ';'; 
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.table(result);
        });
    }
};

module.exports = orm;