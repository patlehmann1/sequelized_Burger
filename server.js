const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const timeout = require('connect-timeout');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(haltOnTimedout);

app.use(methodOverride('_method'));
app.use(haltOnTimedout);

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burger_controller');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);
app.use(haltOnTimedout);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port %s", port));