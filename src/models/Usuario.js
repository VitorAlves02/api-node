const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    addressStreet: {
        type: String,
        required: false,
    },
    addressSuite: {
        type: String,
        required: false,
    },
    addressCity: {
        type: String,
        required: false,
    },
    addressZipcode: {
        type: String,
        required: false,
    },
    addressGeoLat: {
        type: String,
        required: false,
    },
    addressGeoLng: {
        type: String,
        required: false,
    },
    companyName: {
        type: String,
        required: false,
    },
    companyCatchPhrase: {
        type: String,
        required: false,
    },
    companyBs: {
        type: String,
        required: false,
    },
});

mongoose.model('Usuario', UsuarioSchema);