const lugarSchema = new Schema({
    name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
   });
   LugarSchema.index({ location: '2dsphere' });