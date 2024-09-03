const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

// const { create } = require('express-handlebars');
// const handlebars = create();

const app = express();
const port = 3000;

//  HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses\\views'));


//route
app.get('/', (req, res) => { 
    res.render('home')
})

app.get('/news', (req, res) => { 
    res.render('news')
})

//127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on localhost: ${port}`)
})