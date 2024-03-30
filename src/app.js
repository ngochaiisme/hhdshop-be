const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//middleware
app.use(cors());

//listening
const PORT = process.env.PORT || 3000;
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server is running on port: ${PORT}...`)
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}...`);
});
