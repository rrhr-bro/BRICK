const Sequelize = require('sequelize')
const express = require('express')
const session = require('express-session')

const db = require('./database/connection')
const loginRoutes = require('./routes/login')
const dashboardRoutes = require('./routes/dashboard')
const seedUsers = require('./database/seeders/usersSeed')
const seedListinds = require('./database/seeders/listingsSeed')


const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

//middleware
app.use(express.urlencoded({ extended: true}))
app.use(session({
  secret: 'секрет',
  resave: false,
  saveUninitialized: false
}))

//routes
app.use('/', loginRoutes)
app.use('/user', dashboardRoutes)

//мои страницы
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/login');
});

let port = 4200;

(async () => {
  try {
    await db.sequelize.sync({force: true});

    await seedUsers();
    await seedListinds();

    app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
    });

  } catch (error) {
    console.error('Ошибка при синхронизации бд:', error);
  }
})();