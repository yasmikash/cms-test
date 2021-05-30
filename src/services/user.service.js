const bcrypt = require("bcrypt");

const auth = require("../util/auth");
const UserModel = require("../models/user.model");
const HTTPException = require("../exceptions/HTTPException");

module.exports = class UserService {
  signIn = async (data) => {
    const user = await UserModel.findOne({ username: data.username });
    const userExists = await bcrypt.compare(data.password, user.password);
    if (!userExists) throw HTTPException.createValidationError("Invalid login");
    return auth.sign({
      username: user.username,
      type: user.type,
      id: user._id,
    });
  };

  signUp = async (data, userType) => {
    const password = data.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      ...data,
      type: userType,
      password: hashedPassword,
      createdDate: new Date(),
    });
    const userCreated = await user.save();
    return userCreated;
  };

  checkTypeFor = async (username, type) => {
    const user = await UserModel.findOne({ username, type });
    return user;
  };
};
