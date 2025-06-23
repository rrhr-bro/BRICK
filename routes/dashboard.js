const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')

function isAuthenticated(req, res, next) {
    if (req.session.userEmail) return next()
    res.redirect('/login')
}

router.get('/', isAuthenticated, dashboardController.showDashboard)
router.post('/filter', isAuthenticated, dashboardController.filterListings)
router.get('/reset', isAuthenticated, dashboardController.showDashboard)
router.post('/create', isAuthenticated, dashboardController.createListing);
router.post('/action', isAuthenticated, dashboardController.actionListing);

module.exports = router