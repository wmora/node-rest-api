/**
 * Required modules + constants
 */
var HTTP_METHODS = { GET: "GET", POST: "POST", PUT: "PUT", DELETE: "DELETE", OPTIONS: "OPTIONS" };
var _ = require('underscore');
var routes = require('./config').routes;

exports.conf = function () {
  _.each(routes, configureRoute);
}

var configureRoute = function(route) {

  var actions = _.pairs(route.actions);

  _.each(actions, function(action) {
    configureAction(action, route.path);
  });
}

var configureAction = function(action, path) {

  var method = action[0].toUpperCase();
  var controllerAction = action[1];

  switch(method) {
    case HTTP_METHODS.GET:
      app.get(path, controllerAction);
      break;
    case HTTP_METHODS.POST:
      app.post(path, controllerAction);
      break;
    case HTTP_METHODS.PUT:
      app.put(path, controllerAction);
      break;
    case HTTP_METHODS.DELETE:
      app.delete(path, controllerAction);
      break;
    case HTTP_METHODS.OPTIONS:
      app.options(path, controllerAction);
      break;
    default:
      break;
  }
}