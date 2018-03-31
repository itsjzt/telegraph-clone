module.exports = function(req, res, next) {
  console.log(`url: ${req.url}`);
  next();
};
