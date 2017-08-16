const express = require('express');
let bodyParser = require('body-parser');
const path = require('path');
let methodOverride = require("method-override");
let favicon = require('serve-favicon');
let formidable = require('express-formidable');

const port = process.env.PORT || 3434;

let app = express();

//MiddleWares estaticos
//Se hace para usar CSS-JS-etc
app.use(express.static(path.join(__dirname, 'public')));


//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Method Override
app.use(methodOverride("_method"));

//formidable
app.use(formidable({
    keepExtensions: true
}));


//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// Routes
const routes = require('./routes/routes');
const tenisRoutes = require('./routes/tenis');
const referenciasRoutes = require('./routes/referencias');

app.use(routes);
app.use('/tenis', tenisRoutes);
app.use('/referencias', referenciasRoutes);

//view engine
app.set("view engine", "pug");


app.listen(port, function (err) {
    console.log(`Server running in ${port}`);
    console.log(`Test in http://localhost:${port}/`)
});
