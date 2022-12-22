const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.APP_PORT || 3000;
const mongoose = require("mongoose");



// parse requests of content-type - application/json
app.use(express.json());

// Establish MongoDb Connection
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb Connected");
});


// Establish router
const allRouter = require('./router');
app.use('/', allRouter);






app.listen(port, () => {
    console.log(`The backend app Running on Port ${port}`);
})