const { Listing, User } = require('../database/connection')

exports.showLogin = async (req, res) => {
    try{
        const listings = await Listing.findAll({
            include: [{
                model: User,
                attributes: ['firstName', 'lastName']
            }],
            where : { status : 'active' }
        })

        res.render('home', { 
            listings
        })

    } catch {
        console.error('Ошибка при загрузке объявлений:', error);
    }
}

exports.login = async (req, res) => {
    try{
        const { login, password } = req.body
        const user = await User.findOne({ 
            where: {
                email: login,
                password: password
            }
        })

        const listings = await Listing.findAll({
            include: [{
                model: User,
                attributes: ['firstName', 'lastName']
            }],
            where : { status : 'active' }
        })

        if (!user) {
            return res.render('home', { 
                errorMessage: 'Неверный логин или пароль.',
                listings
            })
        }

        req.session.userEmail = user.email
        res.redirect('/user')

    } catch {
        console.error('Ошибка при загрузке объявлений:', error);
    }
}

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}