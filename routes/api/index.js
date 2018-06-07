const express = require('express');
const router = express.Router();

const uploadCtrl = require('./upload.js');

/* api 라우팅 로직 */
router.get('/file', uploadCtrl.uploadGet)

router.post('/file', uploadCtrl.uploadPost);

module.exports = router;