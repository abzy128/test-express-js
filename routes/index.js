var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *    description: get index page
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Not found
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
