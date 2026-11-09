const prisma = require('../config/db');

exports.checkHealth = async(req, res) => {
  try{
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      database: 'connected',
      timestamp: new Date().toString()
    });
  } catch(err) {
    res.status(500).json({ status: 'error', database: 'Disconnected' })
  }
}