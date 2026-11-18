const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getUsers } = require('../controllers/user.controller');

router.get('/users', auth, getUsers);

module.exports = router;
