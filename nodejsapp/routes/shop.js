const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    // "__dirname" => the path of this file (shop.js) on the operation system
    // "../" is for going one folder back so that we can find the "views" folder
    res.render('shop', { products: adminData.products, pageTitle: 'Shop', path:'/'});
});

module.exports = router;