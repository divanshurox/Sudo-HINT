const User = require("../models/User");
// module.exports = async (req, res, next) => {
//   const id = req.header("x-id");
//   const user = await User.findById(id);
//   if (!user) return res.status(400).send("Unauthenticated");
//   req.user = user;
//   next();
// };

//! testing
module.exports = function (req, res, next) {
  if (!req.user) return res.status(401).send("Unauthenticated");
  next();
};
