const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const categoryRouter = require('./routers/categoryRouter');

app.use(express.json());
app.use(cors());

app.use('/api/v1/category', categoryRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});