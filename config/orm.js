require('./connection.js');
const cTable = require('console-table');

const orm = {
    selectAll: function (tableInput) {
        var queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.table(result);
        });
    },
    insertOne: function(tableInput, colInput, dataInput) {
        var queryString = `INSERT INTO ${tableInput} WHERE ${colInput} = ${dataInput};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.table(result);
        });
    },
    updateOne: function () {
        var queryString = `UPDATE ${tableInput} SET ${colInput1} WHERE ${colInput2} = ${dataInput};`; 
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.table(result);
        });
    }
};

module.exports = orm;