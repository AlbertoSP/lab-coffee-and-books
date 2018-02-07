const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: String,
    description: String,
    kindOfEstablishment: String,
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    }
},{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const Lugar = mongoose.model("Lugar", userSchema);
module.exports = Lugar;