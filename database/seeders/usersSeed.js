const db = require('../connection');

const usersData = [
  {
    firstName: 'Анна',
    lastName: 'Березкова',
    email: 'anna.berezkova@example.com',
    password: 'password123',
  },
  {
    firstName: 'Елена',
    lastName: 'Нэндева',
    email: 'elena.nendeva@example.com',
    password: 'securepass456',
  }
];

async function seed() {
  try {
    await db.User.bulkCreate(usersData);
  } catch (error) {
    console.error('Ошибка при заполнении таблицы users', error)
  }
};

module.exports = seed;