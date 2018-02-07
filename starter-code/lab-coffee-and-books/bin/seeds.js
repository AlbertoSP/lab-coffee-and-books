const mongoose = require('mongoose');

const User = require('../models/user');
const Course = require('../models/course');
mongoose.connect("mongodb://localhost:27017/ibi-ironhack");
const password = "ironhack";
const Lugar = require('../models/lugar')



const places = new Lugar[{

    name: 'a',
    description: String,
    kindOfEstablishment: String,
    location: { type:  "Point" , coordinates: [40.428351, -3.705071] }
}, {
    name: 'b',
    description: String,
    kindOfEstablishment: String,
    location: { type:  "Point" , coordinates: [40.428351, -3.705071] }

}, {
    name: '",
    description: String,
    kindOfEstablishment: String,
    location: { type:  "Point" , coordinates: [40.428351, -3.705071] }
}];

timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const User = mongoose.model("User", userSchema);
module.exports = User;

Lugar.create(places, (err, docs) => {
    if (err) {
        throw err
    };
    docs.forEach((places) => {
        console.log(place.name)
    })
    mongoose.connection.close();
});