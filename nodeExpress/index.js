const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app
.engine('hbs', hbs.engine)
.set('view engine', 'hbs')
.set('views', 'views')

app
.use(express.static('public'))
.use(express.urlencoded({extended: true}));

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

app
.use('/', homeRoutes)
.use('/add',addRoutes)
.use('/courses',coursesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))