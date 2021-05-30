const auth = require("../util/auth");
const HTTPException = require("../exceptions/HTTPException");
const UserService = require("../services/user.service");
const userService = new UserService();

module.exports = (userType) => async (req, res, next) => {
  try {
    const token = req.get("authorization").split(" ")[1];
    const user = auth.verify(token);
    const userExists = await userService.checkTypeFor(user.username, userType);
    if (!userExists)
      next(
        HTTPException.createValidationError("You cannot perform this operation")
      );
    req.body.user = user;
    next();
  } catch (error) {
    next(HTTPException.createConfigurationError("Access denied for the user"));
  }
};
