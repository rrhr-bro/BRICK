const db = require('../connection');

const listingsData = [
  // Объявления для Анны Березковой
  {
    type: 'продажа',
    city: 'Москва',
    title: 'квартира',
    price: 8500000,
    status: 'active',
    description: 'Просторная 2-комнатная квартира с современным ремонтом и видом на парк.',
    publishedAt: new Date('2025-06-01'),
    userEmail: 'anna.berezkova@example.com',
  },
  {
    type: 'продажа',
    city: 'Тюмень',
    title: 'дом',
    price: 12500000,
    status: 'active',
    description: 'Трёхэтажный дом с баней и гаражом, идеально для семьи.',
    publishedAt: new Date('2025-05-20'),
    userEmail: 'anna.berezkova@example.com',
  },
  {
    type: 'аренда',
    city: 'Москва',
    title: 'офис',
    price: 150000,
    status: 'inactive',
    description: 'Современный офис площадью 120 кв.м с удобным расположением.',
    publishedAt: new Date('2025-04-15'),
    userEmail: 'anna.berezkova@example.com',
  },
  {
    type: 'аренда',
    city: 'Санкт-Петербург',
    title: 'квартира',
    price: 55000,
    status: 'active',
    description: 'Студия с дизайнерским ремонтом и отличной транспортной доступностью.',
    publishedAt: new Date('2025-06-10'),
    userEmail: 'anna.berezkova@example.com',
  },

  // Объявления для Елены Нэндевой
  {
    type: 'продажа',
    city: 'Екатеринбург',
    title: 'квартира',
    price: 7000000,
    status: 'active',
    description: 'Квартира с панорамными окнами и развитой инфраструктурой рядом.',
    publishedAt: new Date('2025-06-05'),
    userEmail: 'elena.nendeva@example.com',
  },
  {
    type: 'продажа',
    city: 'Казань',
    title: 'дом',
    price: 9000000,
    status: 'active',
    description: 'Двухэтажный дом с садом и гаражом, рядом школа и магазины.',
    publishedAt: new Date('2025-05-25'),
    userEmail: 'elena.nendeva@example.com',
  },
  {
    type: 'аренда',
    city: 'Новосибирск',
    title: 'земля',
    price: 50000,
    status: 'inactive',
    description: 'Участок земли с высоким пешеходным трафиком и отдельным входом.',
    publishedAt: new Date('2025-04-30'),
    userEmail: 'elena.nendeva@example.com',
  },
  {
    type: 'аренда',
    city: 'Ростов-на-Дону',
    title: 'квартира',
    price: 60000,
    status: 'active',
    description: 'Квартира с большой лоджией и качественным ремонтом.',
    publishedAt: new Date('2025-06-12'),
    userEmail: 'elena.nendeva@example.com',
  },
];

async function seed() {
  try {
    await db.Listing.bulkCreate(listingsData);
  } catch (error) {
    console.error('Ошибка при заполнении таблицы listings', error)
  }
};

module.exports = seed;