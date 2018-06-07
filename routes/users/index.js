const express = require('express');
const router = express.Router();

const userCtrl = require('./userCtrl.js');

/* api 라우팅 로직 */
router.get('/addUser', userCtrl.addUser)


module.exports = router;