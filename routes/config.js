/* Import controllers here */

var error = require('../controllers/error');
var user = require('../controllers/user');

/* Routing config */

exports.routes = [
  {
    path: '/users',
    actions: { GET: user.list, POST: user.create }
  },
  {
    path: '/users/:id',
    actions: { GET: user.get }
  },
  //This one MUST go last
  {
    path: '*',
    actions: { GET: error.error404 }
  }
];