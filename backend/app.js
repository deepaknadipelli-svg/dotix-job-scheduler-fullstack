const express = require('express');
const cors = require('cors');
require('dotenv').config();

const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/jobs', jobRoutes);

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
