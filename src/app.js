const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const product = require('./routes/product');

const app = express();
dotenv.config();

//middleware
app.use(cors());
//route
app.use('/api', product);
app.use('/test', (req, res) => {
    res.status(200).json({
        ok: 'oke guy',
    });
});

app.use('/test', (req, res) => {
    res.send('Hello World');
});
//listening
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}...`);
    });
});
