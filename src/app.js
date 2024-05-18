const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const product = require('./routes/product');
const path = require('path');

const app = express();
dotenv.config();

//middleware
app.use(cors());
//route
app.use('/api', product);

// Middleware để xử lý root path
app.use('/', (req, res, next) => {
    // Kiểm tra nếu yêu cầu là tới root path
    if (req.originalUrl === '/') {
        // Trả về file index.html
        return res.sendFile(path.join(__dirname, 'index.html'));
    }
    // Nếu không phải là root path, chuyển tiếp yêu cầu đến middleware hoặc route tiếp theo
    next();
});

//listening
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}...`);
    });
});
