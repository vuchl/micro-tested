const {send} = require('micro')

module.exports = (req, res) => {
  send(res, 200, `Now we talkin' micro!`)
} 