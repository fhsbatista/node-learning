const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
    // "__dirname" => the path of this file (shop.js) on the operation system
    // "../" is for going one folder back so that we can find the "views" folder
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;