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
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

//route
app.get('/', (req, res) => {
    res.send('123')
}
)

//127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on localhost: ${port}`)
})