var _ = require('underscore');
var error = require('./error');
var users = [ { id: '1', name: 'Nyan' }, { id: '2', name: 'Animaniacs' } ];

exports.list = function (request, response) {
  response.json(200, users);
};

exports.get = function (request, response) {
  var user = _.findWhere(users, {id: request.params.id});
  console.log(user);
  if(!user) {
    error.error404(request, response);
  }
  response.json(200, user);
};

exports.create = function(request, response) {
  var id = Math.random().toString();
  var name = request.body.name;
  var user = { id: id, name: name };

  console.log(users);
  response.json(201, user);
};