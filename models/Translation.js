var Mongoose = require('mongoose');

exports.TranslationSchema = new Mongoose.Schema({
  english : { type : String, required : true },
  chinese : { type : String, required : true }
});