const EXCLUDED_PLAYERS = ["S H I R O 1596", "ElSempaí", "EclipseWarrior", "Lord Nayus"]

function send_response(response, message, error = false, status_code = 200) {
  const response_body = {
    error: error,
    code: status_code,
    message: message
  };
  response.send(response_body);
}

function pretty_json(obj) {
  return JSON.stringify(obj)
}


module.exports = {
  send_response: send_response,
  pretty_json: pretty_json,
}
