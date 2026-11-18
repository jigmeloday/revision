const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

exports.register = async ({ email, password }) => {
  if (!email || !password) {
    console.log('error password or email is missing');
  }
  const exist = await prisma.user.findUnique({ where: { email } });

  if (exist) {
    const err = new Error('User already exists');
    err.status = 409;
    throw err;
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hash } });
  return { id: user.id, email: user.email };
};

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  const ok = user && (await bcrypt.compare(password ?? '', user.password));
  if (!ok) {
    const err = new Error('Invalid email or password');
    err.status = 401;
    throw err;
  }
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};
