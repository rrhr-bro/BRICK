const { Listing, User } = require('../database/connection')

exports.showDashboard = async (req, res) => {
    if(!req.session.userEmail) {
        return res.redirect('/login')
    }

    try {
        const listings = await Listing.findAll({
        where: { userEmail: req.session.userEmail}
        })

        const users = await User.findOne({
        where: { email: req.session.userEmail}
        })

        res.render('dashboard', { 
            listings, 
            userEmail: req.session.userEmail,
            users,
            isFiltered: false,
            selectedFilters: {} 
        })

    } catch {
        console.error('Ошибка при загрузке объявлений:', error);
    }
}

exports.filterListings = async (req, res) => {
  if (!req.session.userEmail) {
    return res.redirect('/login');
  }

  try {
    const { titlePole, typePole, cityPole, statusPole } = req.body;
    const filter = { userEmail: req.session.userEmail };

    if (titlePole) { filter.title = titlePole; }
    if (typePole) { filter.type = typePole; }
    if (cityPole) { filter.city = cityPole; }
    if (statusPole) { filter.status = statusPole; }

    const listings = await Listing.findAll({ 
        where: filter 
    });
    const users = await User.findOne({ 
        where: { email: req.session.userEmail } 
    });

    res.render('dashboard', { 
        listings, 
        userEmail: req.session.userEmail,
        users,
        isFiltered: true,
        selectedFilters: {
            title: req.body.titlePole || '',
            type: req.body.typePole || '',
            city: req.body.cityPole || '',
            status: req.body.statusPole || ''
        }
    });
  } catch (error) {
    console.error('Ошибка фильтрации:', error);
  }
};

exports.createListing = async (req, res) => {
  if (!req.session.userEmail) {
    return res.redirect('/login');
  }

  try {
    const { titlePole, typePole, cityPole, pricePole, descPole } = req.body;

    await Listing.create({
      title: titlePole,
      type: typePole,
      city: cityPole,
      price: pricePole,
      description: descPole,
      userEmail: req.session.userEmail,
      publishedAt: new Date(),
      status: 'active'
    });

    res.redirect('/user');
  } catch (error) {
    console.error('Ошибка создания объявления:', error);
  }
};

exports.actionListing = async (req, res) => {
    if (!req.session.userEmail) return res.redirect('/login');

    const { action, idPole, titlePole, typePole, cityPole, pricePole, statusPole, publishedAtPole, emailPole, descPole } = req.body;

    try {
        if (action === 'Обновить') {
            await Listing.update({
                title: titlePole,
                type: typePole,
                city: cityPole,
                price: pricePole,
                status: statusPole,
                description: descPole
            }, 
            { 
                where: {
                    id : idPole,
                    userEmail: req.session.userEmail
                }
            });
        } else if (action === 'Удалить') {
            await Listing.destroy({
                where: {
                    id : idPole,
                    title: titlePole,
                    type: typePole,
                    city: cityPole,
                    price: pricePole,
                    status: statusPole,
                    description: descPole,
                    userEmail: req.session.userEmail
                }
            });
        }

        res.redirect('/user');
    } catch (error) {
        console.error('Ошибка обновления или удаления объявления:', error);
    }
};