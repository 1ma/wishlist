exports.add = function (req, res) {
  res.send('Echoing data back: ' + req.body.tag + ' - ' + req.body.price);
};