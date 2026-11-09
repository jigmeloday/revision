const router = require('express').Router();
const { checkHealth } = require('../controllers/health.contoller');

router.get('/health', checkHealth);

module.exports = router;