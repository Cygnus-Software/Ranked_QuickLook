
function parse_raw(raw_data, players=5) {
  raw_data = raw_data.split(",")
  for (var i = 0; i < raw_data.length; i++) {
    console.log(raw_data[i]);
  }
}

function parse_user(raw_data) {
  raw_data.replace(' ', '%20')
}

module.exports = {
  parse_raw
}