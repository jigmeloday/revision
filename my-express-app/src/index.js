const express = require('express');
const healthRoutes = require('./routes/health.route');
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const cors = require('cors');
const errorHandler = require('./middlewares/errortHandler');
const app = express();
const port = 3000;
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use('/api', healthRoutes); 
app.use('/api/auth', authRouter);
app.use('/api', userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})
