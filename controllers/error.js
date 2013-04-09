
exports.error404 = function(request, response) {
  response.json(404, { error: "Resource not found" });
}