var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var timeout = require('connect-timeout');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(haltOnTimedout);

app.use(methodOverride('_method'));
app.use(haltOnTimedout);

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);
app.use(haltOnTimedout);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port %s", port));