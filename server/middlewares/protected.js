const expressJwt = require("express-jwt");

//protected routes
const isSignedIn = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
  algorithms: ["HS256"],
});
//custom middlewares
const isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth.id;
  if (!checker) {
    return res.status(403).json({
      message: "ACCESS DENIED",
    });
  }
  next();
};

module.exports = { isSignedIn, isAuthenticated };
