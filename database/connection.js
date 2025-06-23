const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'nedvijjimost',
    'postgres',
    '1111',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Listing = require('./listing')(sequelize, Sequelize.DataTypes);

const db = {
    sequelize : sequelize,
    User : User,
    Listing : Listing
};

Object.values(db).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
});

module.exports = db;