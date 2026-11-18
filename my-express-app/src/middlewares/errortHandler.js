module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: status === 500 ? 'Internal server error' : err.message });
};
