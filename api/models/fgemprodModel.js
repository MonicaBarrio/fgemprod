'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
  name: {
    type: String,
    required: 'Nombre del producto requerido'
  },
  price: {
	type: Number,
	default: 0
  },
  description:{ 
  	type: String,
  	required: 'Desripcion requerida'
  }  ,
  images:{ 
  	type: String
  },
  stock: {
	type: Number,
	default: 0
  },
  disconts: {	type: Number,
	enum:[10,15,23,35]
	},
  reviews: {
      stars: [{type : Number}],
      comments: [{type : String}],
      author: [{type : String}],
      email: [{type : String}]
  }
});



module.exports = mongoose.model('Products', ProductsSchema);
