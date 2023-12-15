var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *    description: get user list
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Not found
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
