const orm = require('./config/orm');

orm.updateOne('burgers', 'burger_name', 'BBQ Bacon Cheddar Burger', 'id', '4');
