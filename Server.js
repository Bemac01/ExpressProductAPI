
const express = require('express');
const router = require('./routes/routes');
const app = express();

const PORT = 3000;

//express middleware
app.use(express.json())
app.use(express.urlencoded({extends: false}));

//route creation 
app.use('/api/products', router);


app.listen(PORT, () => {
    console.log(`Server running on 'http://localhost:${PORT}`);
});