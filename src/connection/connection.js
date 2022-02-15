const mongoose = require('mongoose');

const password = 'odiseodev';
const dbname = 'publinote';
const uri = `mongodb+srv://odiseodev:${password}@cluster0.trm8f.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(uri);
}