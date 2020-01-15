const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://usuarios:usuarios@usuarios-ytj4b.mongodb.net/usuarios?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 

requireDir('./src/models');


app.use('/', require('./src/routes'));

app.listen(3001);