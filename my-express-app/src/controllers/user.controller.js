const prisma = require('../config/db');

exports.getUsers = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit) || 10, 1), 100);
    const search = req.query.search?.trim();
    const allowedSort = ['id', 'email'];
    const sortBy = allowedSort.includes(req.query.sortBy) ? req.query.sortBy : 'id';
    const order = req.query.order === 'desc' ? 'desc' : 'asc';
    const where = search ? { email: { contains: search, mode: 'insensitive' } } : {};

   const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: { id: true, email: true },
        orderBy: { [sortBy]: order },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.user.count({ where }),
    ]);
     res.status(200).json({
      data: users,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
};
