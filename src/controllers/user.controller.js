const UserService = require("../services/user.service");

module.exports = class UserController {
  constructor() {
    this.userService = new UserService();
  }

  signIn = async (req, res, next) => {
    try {
      const token = await this.userService.signIn(req.body);
      res.json({ token: token });
    } catch (error) {
      next(error);
    }
  };

  signUp = async (req, res, next) => {
    try {
      const createdUser = await this.userService.signUp(
        req.body,
        req.body.type
      );
      res.json(createdUser);
    } catch (error) {
      next(error);
    }
  };

  approveWorkshopNotice = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.approveWorkshopNotice(
        req.body.user.id,
        req.params.researchId
      );
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };

  signUpAdmin = async (req, res, next) => {
    try {
      const createdAdmin = await this.userService.signUp(req.body, "ADMIN");
      res.json(createdAdmin);
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
      const user = await this.userService.getUser(req.params.userId);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  UpdateUser = async (req, res, next) => {
    try {
      const user = await this.userService.updateUser(
        req.body,
        req.body.id,
        req.body.type
      );
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  deleteUserById = async (req, res, next) => {
    try {
      const user = await this.userService.deleteUserById(req.params.userId);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
};
