const express = require('express');
const healthRoutes = require('./routes/health.route');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use('/api', healthRoutes); 

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})
