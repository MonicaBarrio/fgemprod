'use strict';
module.exports = function(app) {
  var fgemprod = require('../controllers/fgemprodController');

  // fgemprod Routes
  app.route('/api/fgemprod')
    .get(fgemprod.list_all_products)
    .post(fgemprod.create_a_products);


  app.route('/api/fgemprod/:productsId')
    .get(fgemprod.read_a_products)
    .put(fgemprod.update_a_products)
    .delete(fgemprod.delete_a_products);
};