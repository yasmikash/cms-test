const AdminService = require("../services/admin.service");

module.exports = class UserController {
  constructor() {
    this.adminService = new AdminService();
  }

  getStatistics = async (req, res, next) => {
    try {
      const stats = await this.adminService.getStatistics();
      res.json(stats);
    } catch (error) {
      next(error);
    }
  };
};
